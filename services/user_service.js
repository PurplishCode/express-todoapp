const userModel = require("../model/user_model");

class UserService {
    static async registerUser(email,password){
try  {
    const createUser = new userModel({email,password});
    return await createUser.save();
}catch(error) {
throw error;
}
    }
}

module.exports = UserService;