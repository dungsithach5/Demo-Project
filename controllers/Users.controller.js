import UsersModel from '../models/Users.model.js';
const UsersModelController = {

    getUsersById: async (req, res) => {
        try {
            const Users = await UsersModel.find();
            res.status(200).json(Users);
        } catch (error) {
            res.status(500).send('Error fetching Users');
        }
    },


    createUsers: async (req, res) => {
        const body = req.body;
        try {
            const newUsers = await UsersModel.create(body);
            res.status(201).json(newUsers);
        } catch (error) {
            res.status(500).send('Error creating Users');
        }
    },


    updateUsers: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedUsers = await UsersModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedUsers);
        } catch (error) {
            res.status(500).send('Error updating Users');
        }
    },


    deleteUsers: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedUsers = await UsersModel.findByIdAndDelete(id);
            res.status(200).json(deletedUsers);
        } catch (error) {
            res.status(500).send('Error deleting Users');
        }
    }
};

export default UsersModelController;
