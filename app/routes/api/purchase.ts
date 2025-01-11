import { json } from "@remix-run/node";
import { authenticate } from "app/shopify.server";
// import db from "../db.server";

export async function action({ request }: { request: Request }) {
  const { admin } = await authenticate.admin(request);

  // Parse the section data sent from the frontend
  const body = await request.json();
  const { name, price } = body;

  const response = await admin.graphql(
    `#graphql
    mutation AppPurchaseOneTimeCreate($name: String!, $price: MoneyInput!, $returnUrl: URL!, $test: Boolean!) {
      appPurchaseOneTimeCreate(name: $name, returnUrl: $returnUrl, price: $price, test: $test) {
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
        name,
        returnUrl: "https://admin.shopify.com/store/nogor-test-store/apps/wishlist-286/app/settings",
        price: {
          amount: price,
          currencyCode: "USD",
        },
        test: true,
      },
    }
  );

  const data = await response.json();
  console.log("GraphQL Response:", data);

//   if (data?.data?.appPurchaseOneTimeCreate?.appPurchaseOneTime) {
//     const { name, price } = data.data.appPurchaseOneTimeCreate.appPurchaseOneTime;

//     // Save to database (if needed)
//     await db.sections.create({
//       data: {
//         name: name,
//         shop: 'shop',
//         price: price.amount,
//       },
//     });
//   }

  return json(data);
}
