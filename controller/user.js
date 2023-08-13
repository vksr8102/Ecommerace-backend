const User = require("../model/UserModel")



 const createUser =(async(req,res,next)=>{
    try {
       const user = await User.create(req.body) 
       res.status(201).json(user)
      
    } catch (error) {
       console.log(error);
    }
})
module.exports = {createUser}