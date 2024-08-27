import {stripe} from "./index";
import {Stripe} from "stripe";

// Creates a Stripe checkout session with inline items
export async function createStripeCheckoutSession(line_items: Stripe.Checkout.SessionCreateParams.LineItem[]) {
    const url = process.env.WEBAPP_URL;
    const session = stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/failed`,
        mode: "payment"

    })
    return session;
}
