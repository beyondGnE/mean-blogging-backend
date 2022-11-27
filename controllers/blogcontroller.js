/**
 * This is the controller for blog entries
 */
const express = require('express');
const blogController = express.Router();
const blogService = require('../services/BlogService');

/**
 * Get all the blog entries by calling 
 */
blogController.get('/', function(req, res) {
    // NOTE: The actual json response is handled at the repository level.
    // Consider alternate methods of getting data.
    blogService.getAllBlogs(req, res);
});

module.exports = blogController;