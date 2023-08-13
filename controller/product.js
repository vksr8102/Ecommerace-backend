const Product = require("../model/ProductModel");


//create Product ---Admin 
const createProduct = async(req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        product,
        success:true
    })
}

const getAllProducts = async (req,res,next)=>{
    const product = await Product.find();
    res.status(201).json({
        status:true,
        product
    })
}

//update product bu it's id --->Admin
const updateProduct = async(req,res,next)=>{
    const product = await Product.findById(req.parms.id);
    if(!product){
        res.status(500).json({
            status:false,
            message:"No such a product"
        });
        if(product){
            product = await Product.findByIdAndUpdate(req.parms.id,req.body,{})
        }
    }
}

module.exports= {createProduct}