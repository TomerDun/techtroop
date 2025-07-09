function SongsManager() {
    const songs = {};
    const urlStart = 'https://www.youtube.com/watch?v=';

    const addSong = function(name, url) {
        songs[name] = url.split('?v=')[1];        
    }
    function getSong (name) {
        return urlStart + songs[name];
    }

    return {
        addSong,
        getSong,
    }
}

module.exports = SongsManager;