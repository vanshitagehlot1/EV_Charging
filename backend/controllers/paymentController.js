const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.createPayment = async (req, res) => {
    const { amount } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [{ price_data: { currency: "usd", product_data: { name: "EV Charging Slot" }, unit_amount: amount }, quantity: 1 }],
            mode: "payment",
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel",
        });

        res.json({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
