/** 
* index.js
* @discription :: index route file for userapp platform
*/

const express = require("express")
const router = express.Router();


router.use("/userapp/auth",require("./authRoutes"))
router.use("/userapp/user",require("./userRoutes"))
router.use("/userapp/product",require("./productRoutes"))
router.use("/userapp/order",require("./orderRoutes"))
router.use("/userapp/cart",require("./cartRoutes"))



module.exports=router;