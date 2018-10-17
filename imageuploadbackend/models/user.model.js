const mongoose = require('mongoose');

const user = mongoose.Schema({
    name: { type:String },
    username: { type:String },
    image: { type:String }
})

module.exports = mongoose.model('User', user);