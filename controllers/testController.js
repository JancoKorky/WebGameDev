exports.getPosts = (req, res, next) => {

  // var socket = req.app.get("socketio");

  // console.log("i got socket in controller:" + socket.id);
  // socket.on('getPost',(data)=>{
  //   console.log(data)
  // })

  res.status(200).json({ posts: [{ title: "Test Title", content: "test content" }] });
};
