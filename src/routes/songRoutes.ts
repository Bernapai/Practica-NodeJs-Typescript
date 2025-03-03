import express from 'express'
import * as songServices from '../services/songServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(songServices.getAllSongs())
})

router.get('/:id', (req, res) => {
  const song = songServices.findBydId(Number(req.params.id))
  res.send(song)
})

router.post('/', (req, res) => {
  const { id, title, album, year, duration } = req.body
  const newSong = songServices.addSong({ id, title, album, year, duration })
  res.send(newSong)
})



export default router
