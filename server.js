const express = require('express');
const cors = require('cors');
const path = require('path');
const stripe = require('stripe')(
  'sk_test_51NgogfHSrOGQgt9k8BAfm9WeCLh4iBdCKOskIdLDqo4MYROQAMaCPQKGcHkBZCMMtTKa4tx64seKGMWz7ufk1GNB00wMk5jjvW'
);
require('dotenv').config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 4001;

app.use(cors());
app.use(express.json());

// Serve React app
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

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
    success_url: `https://sneakerheadz-06fa4353b04d.herokuapp.com/success`,
    cancel_url: `https://sneakerheadz-06fa4353b04d.herokuapp.com/cancel`,
  });

  // Send user to Stripe session
  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
