import express from "express"
const app = express();
const productRouter = express.Router()
const userRouter = express.Router();

productRouter.get('/list',(req,res)=>{
    res.send("Products Page");
})
userRouter.get('/list',(req,res)=>{
    res.send("USEr Page");
})

app.use('/products',productRouter);
app.use('/users',userRouter)

app.listen(7000,()=>{
    console.log("server is running")
})