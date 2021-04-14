const mongoose = require('../connection');

const schema = new mongoose.Schema({
    fullname: String,
    username: String,
    email: String,
    password: String
})


const model =  mongoose.model('Users' , schema);

module.exports = model;