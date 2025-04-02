import OrdersModel from '../models/Orders.model.js';
const OrdersModelController = {

    getOrdersById: async (req, res) => {
        try {
            const Orders = await OrdersModel.find();
            res.status(200).json(Orders);
        } catch (error) {
            res.status(500).send('Error fetching Orders');
        }
    },


    createOrders: async (req, res) => {
        const body = req.body;
        try {
            const newOrders = await OrdersModel.create(body);
            res.status(201).json(newOrders);
        } catch (error) {
            res.status(500).send('Error creating Orders');
        }
    },


    updateOrders: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedOrders = await OrdersModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedOrders);
        } catch (error) {
            res.status(500).send('Error updating Orders');
        }
    },


    deleteOrders: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedOrders = await OrdersModel.findByIdAndDelete(id);
            res.status(200).json(deletedOrders);
        } catch (error) {
            res.status(500).send('Error deleting Orders');
        }
    }
};

export default OrdersModelController;
