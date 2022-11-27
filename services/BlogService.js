const blogRepo = require('../repositories/BlogRepository');

module.exports.getAllBlogs = function(req, res) {
    return blogRepo.findAll(req, res);
}