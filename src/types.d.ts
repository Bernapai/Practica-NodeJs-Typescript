export type Albums = 'currents' | 'lonerism' | 'innerspeaker';

export interface Song {
    id: number;
    title: string;
    album: Albums;
    year: number;
    duration: string;
}