import { Albums, Song } from './types'

const checkId = (id: number): number => {
  if (typeof id !== 'number') {
    throw new Error('Invalid id')
  }
  return id
}

const checkTittle = (title: string): string => {
  if (typeof title !== 'string') {
    throw new Error('Invalid tittle')
  }
  return title
}

const checkAlbum = (album: any): Albums => {
  if (!isAlbum(album)) {
    throw new Error('Invalid album')
  }
  return album
}

const isAlbum = (param: any): boolean => {
  return Object.values(Albums).includes(param)
}

const checkYear = (year: number): number => {
  if (typeof year !== 'number') {
    throw new Error('Invalid year')
  }
  return year
}

const checkDuration = (duration: string): string => {
  if (typeof duration !== 'string') {
    throw new Error('Invalid duration')
  }
  return duration
}

const checkSong = (object: any): Song => {
  const newCheck: Song = {
    id: checkId(object.id),
    title: checkTittle(object.tittle),
    album: checkAlbum(object.album),
    year: checkYear(object.year),
    duration: checkDuration(object.duration)
  }
  return newCheck
}

export default checkSong
