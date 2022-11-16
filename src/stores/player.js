import { reactive } from 'vue'

export const player = reactive({
    playlist   : [],
    now_playing: {}, // SONG OBJECT
    setPlaylist(songs) {
        this.set_playlist = songs;
    },
    setNowPlaying(song) {
        this.now_playing = song;
    },
    getNowPlayingSongId() {
        return this.now_playing?.id;
    },
    getNowPlaying() {
        return this.now_playing;
    },
    getNowPlayingAlbumID() {
        return this.now_playing?.album?.id ?? null;
    },
    getNowPlayingSongName() {
        return this.now_playing?.name ?? '';
    },
    getNowPlayingSongImage() {
        return this.now_playing?.album?.images[1].url ?? '';
    },
    getNowPlayingArtists() {
        return this.now_playing?.artists?.map(artist => artist.name).join(', ');
    },
    getNowPlayingSongPreview() {
        return this.now_playing?.preview_url;
    },
    getNextSong(){
        for(let i = 0; i < this.playlist.length; i++){
            if(this.playlist.album.id[i] == this.now_playing.album.id){
                const index = this.playlist.album.id[i+1];
                return index;
            }
        }
    },
    getPreviousSong() {
        for(let i = 0; i < this.playlist.length; i++){
            if(this.playlist.album.id[i] == this.now_playing.album.id){
                const index = this.playlist.album.id[i-1];
                return index;
            }
        }
    },
    resetNowPlaying() {
        this.now_playing = {};
    }
})