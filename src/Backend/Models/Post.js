const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please enter an title'],
    lowercase: true,
  },
  description: {
    type: String,
    required: [true, 'Please Provide description'],
    minlength: [10, 'Minimum description length is 10 characters'],
  },
  userId:
  {
      type:mongoose.Types.ObjectId,
      ref:'user',
      required:true
  }
});

const post = mongoose.model('Post', postSchema);

module.exports = post;