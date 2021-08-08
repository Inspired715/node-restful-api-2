var express = require("express");
var blog = require("../controller/blog");


var router = express.Router();

router.route('/api/blogs').get(function (req, res) {
    blog.getBlogs(req, res);
});
router.route('/api/blogs/:id').get(function (req, res) {
  blog.getBlog(req, res);
});
router.route('/api/blogs').post(function (req, res) {
  blog.addBlog(req, res);
});
router.route('/api/blogs/:id').put(function (req, res) {
  blog.updateBlog(req, res);
});
router.route('/api/blogs/:id').delete(function (req, res) {
  blog.deleteBlog(req, res);
});


module.exports = router;