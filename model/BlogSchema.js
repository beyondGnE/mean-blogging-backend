const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true}
});

const commentSchema = new mongoose.Schema({
    author: {type: userSchema, required: true},
    text: {type: String, min: 1},
    datePosted: {type: Date, default: Date.now}
});

const blogSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: userSchema, required: true},
    body: {type: String, min: 1},
    datePosted: {type: Date, default: Date.now},
    comments: [commentSchema],
});

module.exports = mongoose.model('Blog', blogSchema, 'blogs');