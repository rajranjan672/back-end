const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const { alphanumeric } = require('validator/lib/alpha');

const Userschema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        
        minlength:8,
        required: true,
    },
   
})

Userschema.statics.hashPassword = function hashPassword(password) {
    return bcrypt.hashSync(password, 10);
}

Userschema.methods.isValid = function(hashedPassword) {
    return bcrypt.compareSync(hashedPassword, this.password)
}

const UserCollection = mongoose.model("login", Userschema);

module.exports =UserCollection;