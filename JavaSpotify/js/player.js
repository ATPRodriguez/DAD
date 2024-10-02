import Song, {play_song} from './song.js'

export default class Player {
    constructor(map) {
        Object.entries(map);
        for (var [key, value] of Object.entries(map)) {
            let keySong = key;
            let valueSong = value;
            let song = new Song(keySong, valueSong);

            play_song(song);
        }
    }
}