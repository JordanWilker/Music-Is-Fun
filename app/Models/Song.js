export default class Song {
  constructor(data) {
    this.title = data.trackName || data.title;
    this.albumArt =
      data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
    this.artist = data.artistName || data.artist;
    this.album = data.collectionName || data.album;
    this.price = data.trackPrice || data.price;
    this.preview = data.previewUrl || data.preview;
    this._id = data.id
    this.trackId = data.trackId
  }

  get Template() {
    return /*html*/ `
    <div class="card">
    <img class = "card-img-top" src="${this.albumArt}" onclick="app.songsController.addSong('${this.trackId}')">
    <div class="card-body">
        <h4>${this.title} by ${this.artist}</h4>
        <p>$${this.price}</p>
        <audio controls>
          <source src="${this.preview}" type="audio/mp4">
         </audio>
    </div>
</div>
    
    `;
    //<li onclick="app.songsController.addSong('${s.trackId}')">${s.title} ${s.artist}</li>
  }
  get PlayListTemplate() {
    return /*html*/ `
    <div class="card">
    <img class = "card-img-top" src="${this.albumArt}" onclick="app.songsController.removeSong('${this._id}')">
    <div class="card-body">
        <h4>${this.title} by ${this.artist}</h4>
        <p>$${this.price}</p>
        <audio controls>
          <source src="${this.preview}" type="audio/mp4">
         </audio> 
    </div>
</div>
    
    `;
    //<li onclick="app.songsController.addSong('${s.trackId}')">${s.title} ${s.artist}</li>
  }

  get playlistTemplate() {
    return `

        `;
  }
}
