import productModel from "../models/productModel.js";

const showProducts = async (req, res) => {
    const product = await productModel.find();
    res.render("store/product",{product})
};

export {showProducts}
