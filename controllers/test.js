exports.getPosts = (req, res, next) => {
  res.status(200).json({ posts: [{ title: "Test Title", content: "test content" }] });
};