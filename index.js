const express = require('express');
const axios = require('axios');
const app = express();

// Optional: Load environment variables locally (ONLY for local development)
require('dotenv').config();

app.use(express.json());

app.post('/shopify', async (req, res) => {
  try {
    const response = await axios.post(
      'https://s8ufua-99.myshopify.com/api/2024-04/graphql.json',
      req.body,
      {
        headers: {
          'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_TOKEN,
          'Content-Type': 'application/json'
        }
      }
    );
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`PosterBoizz Proxy running on port ${PORT}`));
