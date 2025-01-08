import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { authenticate, MONTHLY_PLAN } from "../shopify.server";
import db from '../db.server'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  console.log('========================================================================================================================================loader1')
  const { billing, session } = await authenticate.admin(request);
  const { shop } = session;
  let myShop: string = shop.replace(".myshopify.com", "");
  // Require the plan in test mode
  await billing.require({
    plans: [MONTHLY_PLAN], // Required plan(s)
    isTest: true, // Set to true for testing, simulate successful payment
    onFailure: async (error) => {
      // If the user is not subscribed to the correct plan, you may need to redirect them to payment
      // await billing.request({ plan: MONTHLY_PLAN });
      console.log('========================================================================================================================================onFailure')
      console.log('error', error)
      return redirect("/app/sections")
    },
    onSuccess: async () => {
      console.log('========================================================================================================================================onSuccess')
      // After a successful subscription, store some data (e.g., in your database)
      const shop = await billing.getShop(); // Get the shop details after successful billing
      // await storeDataInDatabase(shop); // Store relevant data (e.g., customer, subscription, etc.)
    }
  });
  // App logic
  // const subscription = billingCheck.appSubscriptions[0];
  // if (!subscription) {
  //   return redirect("/app/upgrade");
  // }
  // console.log('========================================================================================================================================loader')
  return redirect("/app/sections")
};

export const action: ActionFunction = async () => {
  console.log('==============================================================================================================================================action')
  try {
    // Custom data to save
    const customData = {
      id: "100",
      name: "test",
      description: "test description",
    };

    // Perform Upsert
    await db.settings.upsert({
      where: { id: customData.id },
      update: {
        id: customData.id,
        name: customData.name,
        description: customData.description,
      },
      create: {
        id: customData.id,
        name: customData.name,
        description: customData.description,
      },
    });

    // Return a successful response
    return redirect("/app/sections")
  } catch (error) {
    // Handle Errors Gracefully
    console.error("Error in action:", error);
    throw new Response("Internal Server Error", { status: 500 });
  }
};