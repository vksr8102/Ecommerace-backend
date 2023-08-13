/** 
* index.js
* @discription :: index route file for adminapp platform
*/

const express = require('express');
const router = express.Router();

router.use("/adminapp/auth",require("./authRoutes"))
router.use("/adminapp/user",require("./userRoutes"))
router.use("/adminapp/product",require("./productRoutes"))
router.use("/adminapp/order",require("./orderRoutes"))
router.use("/adminapp/cart",require("./cartRoutes"))