import express from 'express';
import Users from '../models/Users.model.js';
const router = express.Router();

import UsersController from '../controllers/Users.controller.js';

router.route("/")
    .post(UsersController.createUsers)
    .get(UsersController.getUsersById);

router.route("/:id")
    .patch(UsersController.updateUsers)
    .delete(UsersController.deleteUsers);

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const User = await Users.findById(id);
        res.json(User);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
