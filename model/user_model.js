const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const db = require('../config/db');

const { Schema } = mongoose;

// Automatically creates a User Schema into our MongoDB database.
const userSchema = new Schema({
    email: {
        type: String,
        lowercase:true,
        required:true,
        unique:true
    },
    password: {
        type: String,
        required: true
    }
});

// Before saving a document in the User Schema, this functon is called. Hence "pre-" function predefined.
userSchema.pre('save', async function(){
    try {
        // "this" refers to the current document being saved (User Schema).
        var user = this;
        // Generate a unique salt via bcryption package.
        const salt = await(bcrypt.genSalt(10));

        // Hash the user's password using the generated salt.
        const hashPassword = await bcrypt.hash(user.password, salt);

        // Assign the hashed password back to the user's password field.
        user.password = hashPassword;

    }catch(error) {
        throw error;
    }
});

const userModel = db.model('user', userSchema);

module.exports = userModel;