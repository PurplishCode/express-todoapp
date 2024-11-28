const userService = require('../services/user_service');

exports.register = async(req,res,next) => {
    try {
        const {full_name,email,password} = req.body;

        const successRes = await userService.registerUser(email,password);

        res.json({status:true, success:"User Registered succesfully"});
    }catch(err){
        throw err;
    }
};