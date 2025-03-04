import express from 'express'
import * as songServices from '../services/songServices'
import checkSong from '../utils'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(songServices.getAllSongs())
})

router.get('/:id', (req, res) => {
  const song = songServices.findBydId(Number(req.params.id))
  res.send(song)
})

router.post('/', (req, res) => {
  try {
    const newSongEntry = checkSong(req.body)

    const newSongAdded = songServices.addSong(newSongEntry)

    res.json(newSongAdded)
  } catch (error) {
    res.status(400).send()
  }
}
)

router.put('/:id', (req, res) => {
  const { title, album, year, duration } = req.body
  const updatedSong = songServices.updateSong(Number(req.params.id), { title, album, year, duration })
  res.send(updatedSong)
})

export default router
