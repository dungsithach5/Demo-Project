import ReviewModel from '../models/Review.model.js';
const ReviewsModelController = {

    getReviewById: async (req, res) => {
        try {
            const Review = await ReviewModel.find();
            res.status(200).json(Review);
        } catch (error) {
            res.status(500).send('Error fetching Review');
        }
    },


    createReview: async (req, res) => {
        const body = req.body;
        try {
            const newReview = await ReviewModel.create(body);
            res.status(201).json(newReview);
        } catch (error) {
            res.status(500).send('Error creating Review');
        }
    },


    updateReview: async (req, res) => {
        const id = req.params.id;
        const body = req.body;
        try {
            const updatedReview = await ReviewModel.findByIdAndUpdate(id, body, { new: true });
            res.status(200).json(updatedReview);
        } catch (error) {
            res.status(500).send('Error updating Review');
        }
    },


    deleteReview: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedReview = await ReviewModel.findByIdAndDelete(id);
            res.status(200).json(deletedReview);
        } catch (error) {
            res.status(500).send('Error deleting Review');
        }
    }
};

export default ReviewsModelController;
