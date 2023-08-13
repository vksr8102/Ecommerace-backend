const mongoose = require("mongoose")


const ProductSchema = new  mongoose.Schema({
   name:{type:String,
    required:[true,"Please Enter the Product name"],
    trim:true
    },
   desc:{
    type:String,
    required:[true,"Please add a description"]
},
price:{
    type : Number ,
    required:[true,"Please enter product price"],
    maxLength:[8, "Price can't be more than eight digits long."],
    },
    rating:{
        type:Number,default:0
    },
   images:[{
    public_id:{
        type : String ,
    required:true
    },
    url:{
        type : String ,
    required:true
    },
}
   ],
   category:{
    type:String,
    required:[true,'Category is Required']
    },
    stock:{
        type:Number,
        required:[true,
        'Please Enter product stock'],
        maxLength:[4,
        `Stock number must not exceed four characters`],
        default:1
    },
    numofReviews:{
        type:Number, default:1
    },
    reviews:[
        {
            name:{
                type:String,required:[true]
            },
            comment:{
                type:String,required:[true]
                },
            rating:{
                type:Number,
                required:true
            }    
        }
    ],
    createdAt:{type:Date,default: Date.now()}
})

const Product =mongoose.model("product",ProductSchema)
module.exports = Product;