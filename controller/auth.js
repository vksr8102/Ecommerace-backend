const User = require("../model/UserModel");
const CryptoJS = require("crypto-js")
//REGISTER


const Register = async(req,res)=>{
    const newUser = new User({
        username: req.body.username,
        password:CryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY).toString(),
        email : req.body.email
    })
    try {
       const saveUser = await newUser.save();
       res.status(201).json(saveUser) 
    } catch (error) {
        res.status(500).json(error)   
    }
}

//LOGIN

const Login = async(req,res)=>{
    try {
        const user = await User.findOne({username:req.body.username });
 !user && res.status(401).send('Invalid Credentials') 
const hashPassword=CryptoJS.AES.decrypt(user.password,process.env.SECRET_KEY);
       const origanalPassword =hashPassword.toString(CryptoJS.enc.Utf8);
origanalPassword !== req.body.password&& res.status(401).json("Invalid Credentials ");
const {password,...others}=user._doc
        res.status(200).json(others)
    } catch (error) {
      res.status(500).json(error)   
    }
} 

module.exports = {Register,Login}