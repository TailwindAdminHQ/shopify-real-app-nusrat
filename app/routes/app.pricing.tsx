import React from 'react';
import { Button, Card, Layout, Page } from '@shopify/polaris';
import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import { authenticate } from 'app/shopify.server';
import db from '../db.server';
interface AppPurchaseResponse {
  data?: {
    appPurchaseOneTimeCreate?: {
      appPurchaseOneTime?: {
        createdAt?: string;
        id?: string;
        name?: string;
        price?: {
          amount: string;
          currencyCode: string;
        };
      };
      confirmationUrl?: string;
    };
  };
}

export async function loader({ request }: { request: Request }) {
  const { admin } = await authenticate.admin(request);

  const response = await admin.graphql(
    `#graphql
  mutation AppPurchaseOneTimeCreate($name: String!, $price: MoneyInput!, $returnUrl: URL!) {
    appPurchaseOneTimeCreate(name: $name, returnUrl: $returnUrl, price: $price) {
      userErrors {
        field
        message
      }
      appPurchaseOneTime {
        createdAt
        id
        name
        price {
          amount
          currencyCode
        }
      }
      confirmationUrl
    }
  }`,
    {
      variables: {
        "test": true,
        "name": "1000 imported orders.",
        "returnUrl": "http://super-duper.shopifyapps.com/",
        "price": {
          "amount": 10.0,
          "currencyCode": "USD"
        }
      },
    },
  );

  const data = await response.json();
  console.log('+==========================================================================================================================================', data)

  if (data?.data?.appPurchaseOneTimeCreate?.appPurchaseOneTime) {
    const { name, price } = data.data.appPurchaseOneTimeCreate.appPurchaseOneTime;

    // Save to Prisma 'Sections' table
    await db.sections.create({
      data: {
        name: name,
        shop: 'shop',
        price: price.amount,
      },
    });
  }

  return json(data);
}

const Pricing = () => {
  const actionData = useLoaderData<AppPurchaseResponse>();
  const purchaseData = actionData?.data?.appPurchaseOneTimeCreate?.appPurchaseOneTime;
  const confirmationUrl = actionData?.data?.appPurchaseOneTimeCreate?.confirmationUrl;

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Card>
            {/* Display data from action response */}
            {purchaseData ? (
              <>
                <p>Name: {purchaseData.name}</p>
                <p>Price: {purchaseData.price?.amount} {purchaseData.price?.currencyCode}</p>
              </>
            ) : (
              <p>Click the button to make a purchase.</p>
            )}
            {/* <Button
              onClick={() => {
                if (confirmationUrl) {
                  window.open(confirmationUrl, "_blank");
                }
              }}
            >
              Purchase
            </Button> */}
            <Button url={confirmationUrl} target='_blank'>Purchase</Button>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Pricing;
