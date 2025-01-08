import { Button, Card, Layout, Page } from '@shopify/polaris';
import React from 'react';
import { useActionData, Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import { authenticate } from 'app/shopify.server';
import db from '../db.server';

// Action function to execute GraphQL mutation on button click
export async function action({ request }: { request: Request }) {
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
  console.log('+==========================================================================================================================================',data)

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
  const actionData = useActionData();
  const purchaseData = actionData?.data?.appPurchaseOneTimeCreate?.appPurchaseOneTime;

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
            {/* Form to trigger the action */}
            <Form method="post">
              <Button submit>Purchase</Button>
            </Form>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Pricing;
