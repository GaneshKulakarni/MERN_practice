import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  Description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
});
const productModel = mongoose.model("product", productSchema);

export default productModel;




