import ProductModel from '../models/Product.model.js';
const ProductModelController = {

    getProductById: async (req, res) => {
        try {
            const Product = await ProductModel.find();
            res.status(200).json(Product);
        } catch (error) {
            res.status(500).send('Error fetching Product');
        }
    },


    createProduct: async (req, res) => {
        const body = req.body;
        try {
            const newProduct = await ProductModel.create(body);
            res.status(201).json(newProduct);
        } catch (error) {
            res.status(500).send('Error creating Product');
        }
    },


    updateProduct: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedProduct = await ProductModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(500).send('Error updating Product');
        }
    },


    deleteProduct: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedProduct = await ProductModel.findByIdAndDelete(id);
            res.status(200).json(deletedProduct);
        } catch (error) {
            res.status(500).send('Error deleting Product');
        }
    }
};

export default ProductModelController;
