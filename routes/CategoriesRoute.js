import express from 'express';
import Categories from '../models/categories.model.js'
const router = express.Router();

import CategoriesController from '../controllers/Categories.controller.js';

router.route("/")
    .post(CategoriesController.createCategories)
    .get(CategoriesController.getCategoriesById);

router.route("/:id")
    .patch(CategoriesController.updateCategories)
    .delete(CategoriesController.deleteCategories);

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const categories = await Categories.findById(id);
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
