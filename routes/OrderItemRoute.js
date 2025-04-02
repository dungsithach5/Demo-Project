import express from 'express';
import OrderItems from '../models/OrderItem.model.js';
const router = express.Router();

import OrderItemsController from '../controllers/OrderItem.controller.js';

router.route("/")
    .post(OrderItemsController.createOrderItem)
    .get(OrderItemsController.getOrderItemById);

router.route("/:id")
    .patch(OrderItemsController.updateOrderItem)
    .delete(OrderItemsController.deleteOrderItem);

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const OrderItem = await OrderItems.findById(id);
        res.json(OrderItem);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
