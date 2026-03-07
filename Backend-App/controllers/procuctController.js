import productModel from '../models/productModel'

const showProducts=(req,res)=>{
       res.renser("home",{productModel})
}
export {showProducts}