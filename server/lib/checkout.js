"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStripeCheckoutSession = createStripeCheckoutSession;
const index_1 = require("./index");
// Creates a Stripe checkout session with inline items
async function createStripeCheckoutSession(line_items) {
    const url = process.env.WEBAPP_URL;
    const session = index_1.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/failed`,
        mode: "payment"
    });
    return session;
}
//# sourceMappingURL=checkout.js.map