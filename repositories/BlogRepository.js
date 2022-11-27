/**
 * Basic repository methods to be called by the service.
 * Acts as first layer to the database, via mongoose schema
 */

/**
 * Get the mongoose model of the blogs
 */
// const mongoose = require('mongoose');
const blogModel = require('../model/BlogSchema');
// const blogModel = mongoose.model('blog'); 

/**
 * Gets all the blogs for a user id.
 * @param {*} req For getting param information.
 * @param {*} res For getting desired resources.
 */
module.exports.findAll = function(req, res) {
    let blogList = '';
    blogModel.find(function(err, blogs) {
        // blogList = blogs;
        // console.log(typeof(blogs));
        // console.log(typeof(JSON.stringify(blogs)));
        // res.status(200);
        // res.json(blogs);
        blogList = blogs;
    });
    console.log(blogList);
    // return blogList;
};

module.exports.findById = function(req, res) {

}
