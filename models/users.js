const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const userSchema = Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = Mongoose.model('Users', userSchema);