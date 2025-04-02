import express from 'express';
import Review from '../models/Review.model.js'
const router = express.Router();

import ReviewController from '../controllers/Review.controller.js';

router.route("/")
    .post(ReviewController.createReview)
    .get(ReviewController.getReviewById);

router.route("/:id")
    .patch(ReviewController.updateReview)
    .delete(ReviewController.deleteReview);

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const Reviews = await Review.findById(id);
        res.json(Reviews);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

export default router;
