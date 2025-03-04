import { Song } from '../types'
import songData from './songData.json'

const songs: Song[] = songData as Song[]

export const getAllSongs = (): Song[] => songs

export const findBydId = (id: number): Song | undefined => {
  const song = songs.find((song) => song.id === id)
  return song
}

export const addSong = (NewSong: Song): Song => {
  const newSong = { ...NewSong }
  songs.push(newSong)
  return newSong
}

export const updateSong = (id: number, updateSong: Partial<Song>): Song | undefined => {
  const index = songs.findIndex((song) => song.id === id)
  if (index === -1) return undefined
  songs[index] = { ...songs[index], ...updateSong }
  return songs[index]
}

export const deleteSong = (): undefined => {
  return undefined
}
