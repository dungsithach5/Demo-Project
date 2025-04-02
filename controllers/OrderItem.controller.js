import OrderItemModel from '../models/OrderItem.model.js';
const OrderItemModelController = {

    getOrderItemById: async (req, res) => {
        try {
            const OrderItem = await OrderItemModel.find();
            res.status(200).json(OrderItem);
        } catch (error) {
            res.status(500).send('Error fetching OrderItem');
        }
    },


    createOrderItem: async (req, res) => {
        const body = req.body;
        try {
            const newOrderItem = await OrderItemModel.create(body);
            res.status(201).json(newOrderItem);
        } catch (error) {
            res.status(500).send('Error creating OrderItem');
        }
    },


    updateOrderItem: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedOrderItem = await OrderItemModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedOrderItem);
        } catch (error) {
            res.status(500).send('Error updating OrderItem');
        }
    },


    deleteOrderItem: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedOrderItem = await OrderItemModel.findByIdAndDelete(id);
            res.status(200).json(deletedOrderItem);
        } catch (error) {
            res.status(500).send('Error deleting OrderItem');
        }
    }
};

export default OrderItemModelController;
