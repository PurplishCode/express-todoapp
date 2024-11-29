const userService = require('../services/user_service');
const bcryptjs = require('bcryptjs');
const jsonWebToken = require('jsonwebtoken');
const userModel = require('../model/user_model');




exports.register = async(req,res,next) => {
    try {
        const {full_name,email,password} = req.body;

        const successRes = await userService.registerUser(full_name,email,password);

        res.json({status:true, success:"Succesfully registered."});
    }catch(err){
        throw err;
    }
};

exports.signin = async(req,res,next) => {
    try { 
        const { email, password } = req.body;
        const user = await userModel.findOne({email});

    if(!user) {
        return res.status(400).json({message: "User with this email doesn't exist."});
    }
    const isMatch = await bcryptjs.compare(password, user.password);
    if(!isMatch) {
        return res.status(400).json({message: "The password is incorrect, try again."});
    }
    const token = jsonWebToken.sign({id: user._id}, "passwordKey");

    res.json({token, ...user._doc});
    }catch(e)
    {
        res.status(500).json({message: e.message});
    }
}