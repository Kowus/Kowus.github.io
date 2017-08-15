var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    permalink: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now()
    },
    author: {
        type: String,
        default: 'Barnabas Nomo'
    }

});

module.exports = mongoose.model('blog', BlogSchema);

