const { Router } = require('express');
const { getAllProducts,
        getSingleProduct,
        updateProduct,
        deleteProduct } = require('../controllers/products.controllers');

const router = Router();

// Show all product list

router.get('/api/products', getAllProducts);

// Show only a single product

router.get('/api/products/:id', getSingleProduct);

// Update product

router.put('/api/products/:id', updateProduct);

// Delete product

router.delete('/api/products/:id', deleteProduct);


module.exports = router;
