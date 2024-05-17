const BlogPost = require("../models/blogModel");

const healthCheck = (req, res) => {
  res.send("Server is working successfully!");
};

const getBlogPost = async (req, res) => {
  try {
    const blogposts = await BlogPost.find({});
    res.status(200).json(blogposts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getBlogPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const blogpost = await BlogPost.findById(id);
    res.status(200).json(blogpost);
    if (!blogpost) {
      res.status(404).json({ message: `cannot find any post with id ${id} ` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBlogPost = async (req, res) => {
  try {
    const blogpost = await BlogPost.create(req.body);
    res.status(200).json(blogpost);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

const updateBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const blogpost = await BlogPost.findByIdAndUpdate(id, req.body);
    const updatedBlogpost = await BlogPost.findById(id);
    res.status(200).json(updatedBlogpost);
    if (!blogpost) {
      res.status(404).json({ message: `Cannot find any post with id ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const blogpost = await BlogPost.findByIdAndDelete(id);
    res.status(200).json({
      message: `The blog with id ${id} has been successfully deleted.`,
    });
    if (!blogpost) {
      res.status(404).json({ message: `Cannot find any post with id ${id}` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  healthCheck,
  getBlogPost,
  getBlogPostById,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
};
