const userModel = require("../model/user_model");
class UserService {
    static async registerUser(full_name,email,password){
try  {
    const createUser = new userModel({full_name,email,password});
    return await createUser.save();
}catch(error) {
throw error;
}
    }
}

module.exports = UserService;