import { Component, OnInit, OnChanges } from '@angular/core';
import { SpotateService } from '../spotate.service';
import { Input } from '@angular/core';
@Component({
  selector: 'app-song-display',
  templateUrl: './song-display.component.html',
  styleUrls: ['./song-display.component.scss']
})
export class SongDisplayComponent implements OnInit,OnChanges{
  @Input() trackName: string;
  constructor(private spotateService: SpotateService) { }
  soundtracks;
  albums;
  artists;
   ngOnInit() {

  }
ngOnChanges(){
  this.spotateService.getTracks(this.trackName)
  .subscribe((data:any)=> {
    this.soundtracks = data.tracks.items
    this.albums = data.albums.items
    this.artists = data.artists.items
  });

}
}
