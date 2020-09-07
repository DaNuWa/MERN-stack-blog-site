const Post=require('../Models/Post')


module.exports.posts_get = async (req, res) => {
  try {
    const post = await Post.find().populate('userId');
    res.status(201).json({ post: post });
  }
  catch(err) {
   console.log(err)
    res.status(400).json({ err});
  }
  }
  
  module.exports.posts_post = async (req, res) => {
    const { title, description } = req.body;
    const userId="5f55e3d91d25e62e086ac973";
    try {
      const post = await Post.create({ title, description,userId });
      //const token = createToken(user._id);
      //res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
      res.status(201).json({ post: post });
    }
    catch(err) {
     // const errors = handleErrors(err);
     console.log(err)
      res.status(400).json({ err});
    }
  }