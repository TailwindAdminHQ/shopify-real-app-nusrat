import { redirect, type LoaderFunctionArgs } from "@remix-run/node";
import { authenticate, MONTHLY_PLAN } from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { billing, session } = await authenticate.admin(request);
    const {shop} = session;
    let myShop: string = shop.replace(".myshopify.com", "");
   const billingCheck = await billing.require({
      plans: [MONTHLY_PLAN],
      onFailure: async () => billing.request({
        plan: MONTHLY_PLAN,
        isTest: true,
        returnUrl: `https://admin.shopify.com/store/${myShop}/apps/${process.env.APP_NAME}/app/pricing`,
      }),
    });
  // App logic
  const subscription = billingCheck.appSubscriptions[0];
  if(!subscription){
    return redirect("/app/upgrade");
  }
  return redirect("/app/sections")
};