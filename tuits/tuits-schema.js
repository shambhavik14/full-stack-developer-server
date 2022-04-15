import mongoose from 'mongoose';
const schema = mongoose.Schema({
  image: String,
  tuit: String,
  author: String,
  handle: String,
  likes: Number,
  dislikes: Number,
  postedBy: {
    username: String
  }
}, {collection: 'tuits'});
export default schema;

