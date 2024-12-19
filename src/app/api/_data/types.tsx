// You may import these types in your code. It is recommended to do so for code quality.
export type Artist = {
    id: number;
    name: string;
    genre: string;
    [key: string]: any; // Allows for adding other properties
}

export type Album = {
    id: number;
    artistId: number;
    title: string;
    releaseYear: number;
    albumArtUrl: string;
    genre: string;
    tracklist: string[];
    [key: string]: any; // Allows for adding other properties
}