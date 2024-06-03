const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Route to save products
router.post('/products', async (req, res) => {
  try {
    const { userId, products } = req.body;

    await Product.insertMany(products.map(product => ({ ...product, userId })));

    res.status(201).send('Products saved successfully');
  } catch (error) {
    console.error('Error saving products:', error);
    res.status(500).send('Error saving products');
  }
});

module.exports = router;
