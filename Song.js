class Song {

    constructor(songName, bandName) {
        this.songName = songName;
        this.bandName = bandName;
    }

    getSongName() {
        return this.songName;
    }

    setSongName(songName) {
        this.songName = songName;
    }

    getBandName() {
        return this.bandName;
    }

    setBandName(bandName) {
        this.bandName = bandName;
    }

    countName(count) {
        count = count.split(" ");
        return count.length;
    }

    createElement() {

    }
}

let song1 = new Song('Baby You', 'Mark Anthony');
let song2 = new Song('I will be right here waiting for you', 'Richard Marx')
console.log(song1.countName(song1.getSongName()));
console.log(song2.countName(song2.getSongName()));
console.log('__________________________________________________________________________________________________');
