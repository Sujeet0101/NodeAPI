const express = require("express");
const router = express.Router();

const {
  healthCheck,
  getBlogPost,
  getBlogPostById,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
} = require("../controller/controller");

router.get("/healthcheck", healthCheck);
router.get("/blogposts", getBlogPost);
router.get("/blogposts/:id", getBlogPostById);
router.post("/blogposts", createBlogPost);
router.put("/blogposts/:id", updateBlogPost);
router.delete("/blogposts/:id", deleteBlogPost);

module.exports = router;
