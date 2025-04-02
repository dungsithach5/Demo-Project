import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    total_price: { type: Number, required: true },
    is_paid: { type: Boolean, default: false },
    paid_at: { type: Date },
    is_delivered: { type: Boolean, default: false },
    delivered_at: { type: Date },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
