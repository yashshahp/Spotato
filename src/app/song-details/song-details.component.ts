import { Component, OnInit, Input, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss']
})
export class SongDetailsComponent implements OnInit {
  @Input() track:any
  constructor() { }
  timeMin;
  timeSec;
  sec;  
  trackArtists;
  TrackalbumCovers;
  trackCoverUrl;
  ngOnInit() {
    if(this.track)
    {
    this.trackArtists=this.track.artists
 
     if(this.track.duration_ms){
      this.timeMin=Math.floor(this.track.duration_ms/60000);
      this.sec=Math.floor(this.track.duration_ms/1000);
      this.timeSec=this.sec%60;
      if(this.timeSec<10){
        this,this.timeSec='0'+this.timeSec;
      }
      }
      this.TrackalbumCovers=this.track.album.images;
      this.trackCoverUrl=this.TrackalbumCovers[2].url
     
      }
  }

}
