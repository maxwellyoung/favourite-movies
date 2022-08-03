const express = require('express')

const db = require('../db/db')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getMovies()
    .then((movie) => {
      res.json(movie)
    })
    .catch((err) => {
      res.status(500).send('DB ERR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  const newMovie = req.body
  db.addMovie(newMovie)
    .then((idArr) => {
      const id = idArr[0]
      // eslint-disable-next-line promise/no-nesting
      db.getOneMovie(id)
        .then((movie) => {
          res.json(movie)
        })
        .catch((err) => {
          res.status(500).send('DB ERR: ' + err.message)
        })
    })
    .catch((err) => {
      res.status(500).send('DB ERR: ' + err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteMovie(id)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.patch('/:id', (req, res) => {
  const details = req.body
  const id = req.params.id
  db.updateMovie(id, details)
    .then(() => {
      res.sendStatus(200)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
  })