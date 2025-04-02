import CategoriesModel from '../models/Categories.model.js';
const CategoriesModelController = {

    getCategoriesById: async (req, res) => {
        try {
            const categories = await CategoriesModel.find();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).send('Error fetching Categories');
        }
    },


    createCategories: async (req, res) => {
        const body = req.body;
        try {
            const newCategories = await CategoriesModel.create(body);
            res.status(201).json(newCategories);
        } catch (error) {
            res.status(500).send('Error creating Categories');
        }
    },


    updateCategories: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedCategories = await CategoriesModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedCategories);
        } catch (error) {
            res.status(500).send('Error updating Categories');
        }
    },


    deleteCategories: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedCategories = await CategoriesModel.findByIdAndDelete(id);
            res.status(200).json(deletedCategories);
        } catch (error) {
            res.status(500).send('Error deleting Categories');
        }
    }
};

export default CategoriesModelController;
