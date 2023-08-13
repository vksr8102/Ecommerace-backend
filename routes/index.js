const express = require("express")
const ratelimit = require("express-rate-limit")
const router = express.Router()


const rateLimiter = ratelimit({
    windowMs: 2 * 60 * 1000,
    max: process.env.MAX_REQUESTS || "2", // limit each IP to
    message: {
        error : 'Too many requests from this IP, please try again after 2 minutes'
        },
        skip:(req)=>{
            if (req.url.includes('/swagger') || req.url.includes('/favicon')){
                return true;
                }else{
                return false;
                    }
        }
    
})


router.use(rateLimiter,require("./userapp/v1/index"));
// router.use(rateLimiter,require("./adminApp/v1/index"))

module.exports = router;