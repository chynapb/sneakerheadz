const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51NgogfHSrOGQgt9k8BAfm9WeCLh4iBdCKOskIdLDqo4MYROQAMaCPQKGcHkBZCMMtTKa4tx64seKGMWz7ufk1GNB00wMk5jjvW'
);
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve files from public directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(join(__dirname, 'public')));

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

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
