import { LoaderArgs } from "@remix-run/node";
import { authenticate, MONTHLY_PLAN } from "../shopify.server";

export const loader = async ({ request }: LoaderArgs) => {
  const { billing } = await authenticate.admin(request);
  const billingCheck = await billing.require({
    plans: [MONTHLY_PLAN],
    onFailure: async () => billing.request({ plan: MONTHLY_PLAN }),
  });

  const subscription = billingCheck.appSubscriptions[0];
  const cancelledSubscription = await billing.cancel({
    subscriptionId: subscription.id,
    isTest: true,
    prorate: true,
   });
   return { success: true, cancelledSubscription };

  // App logic
};