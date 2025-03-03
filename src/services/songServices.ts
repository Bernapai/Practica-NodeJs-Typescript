import { Song } from '../types';
import songData from './songData.json';

const songs: Array<Song> = songData as Array<Song>;


export const getAllSongs = () => songs;
export const addSong = () => null;
