import express from 'express';
import Product from '../models/Product.model.js'
const router = express.Router();

import ProductController from '../controllers/Product.controller.js';

router.route("/")
    .post(ProductController.createProduct)
    .get(ProductController.getProductById);

router.route("/:id")
    .patch(ProductController.updateProduct)
    .delete(ProductController.deleteProduct);

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const Products = await Product.findById(id);
        res.json(Products);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
