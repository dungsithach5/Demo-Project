import express from 'express';
import Orders from '../models/Orders.model.js'
const router = express.Router();

import OrdersController from '../controllers/Orders.controller.js';

router.route("/")
    .post(OrdersController.createOrders)
    .get(OrdersController.getOrdersById);

router.route("/:id")
    .patch(OrdersController.updateOrders)
    .delete(OrdersController.deleteOrders);

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const Order = await Orders.findById(id);
        res.json(Order);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
