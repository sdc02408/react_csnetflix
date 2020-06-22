const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchemaMovie = mongoose.Schema({
  userFrom:{
    type:Schema.Types.ObjectID,
    ref:'Usernetflix'
  },
  movieId: {
    type:String
  },
  movieTitle: {
    type:String
  },
  moviePost: {
    type:String
  }
},{timestamps: true})

const FavoriteMovie = mongoose.model('Favorite',favoriteSchemaMovie);

module.exports = {FavoriteMovie}
