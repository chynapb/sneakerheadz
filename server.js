const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51NgogfHSrOGQgt9k8BAfm9WeCLh4iBdCKOskIdLDqo4MYROQAMaCPQKGcHkBZCMMtTKa4tx64seKGMWz7ufk1GNB00wMk5jjvW'
);

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post('/checkout', async (req, res) => {
  // Create line items and format them for Stripe
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  // Initialize Stripe session
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  // Send user to Stripe session
  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log('Listening on port 4000.'));
