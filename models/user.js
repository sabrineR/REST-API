const mongoose = require('mongoose');
const schema = mongoose.Schema;
const userSchema = new schema({
    name:{type: String, rquired:true},
    email:{type: String, rquired:true},
    phone:{type: Number}

});
const User = mongoose.model("user",userSchema);
module.exports = User;