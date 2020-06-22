const express = require('express')
const router = express.Router()
const { FavoriteMovie } = require('../models/Favorite')

router.post('/favoriteNumber', (req, res) => {
  //mongodb에서 favorite 숫자를 가져오기
  FavoriteMovie.find({ "movieId": req.body.movieId })
  .exec((err, info) => {
    if (err) return res.status(400).send(err)
    //성공하면 프론트로 숫자 정보 보내주기
    res.status(200).json({
      success: true,
      favoriteNumber: info.length
    })
  })
})

router.post('/favorited', (req, res) => {
  FavoriteMovie.find({ "movieId": req.body.movieId, 'userFrom': req.body.userFrom })
  .exec((err, info) => {
    if (err) return res.status(400).send(err)
    
    let result = false;
    if (info.length !== 0) {
      result = true
    }
    res.status(200).json({ success: true, favorited: result })
  })
})

router.post('/removeFromFavorite', (req, res) => {
  FavoriteMovie.findOneAndDelete({ movieId: req.body.movieId, userFrom: req.body.userFrom })
  .exec((err, doc) => {
    if (err) return res.status(400).send(err)
    res.status(200).json({ suceess: true, doc })
  })
})

router.post('/addToFavorite', (req, res) => {
  const favoriteMovie = new FavoriteMovie(req.body)
  
  favoriteMovie.save((err, doc) => {
    if (err) return res.status(400).send(err)
    return res.status(200).json({ success: true })
  })
})

router.get('/getFavoredMovie', (req,res) => {
  FavoriteMovie.find({'userFrom': req.body.userFrom})
  .exec((err,favorites) => {
    if(err) return res.status(400).send(err)
    return res.status(200).json({success:true, favorites })
  })
})

router.post('/removeFromFavorite', (req,res) => {
  favoriteMovie.findOneAndDelete({movieId: req.body.movieId, userFrom: req.body.userFrom})
  .exec((err,result) => {
    if(err) return res.status(400).send(err)
    return res.status(200).json({success: true})
  })
})

module.exports = router
