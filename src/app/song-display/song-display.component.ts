import { Component, OnInit, OnChanges } from '@angular/core';
import { SpotateService } from '../spotate.service';
import { Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GetTrack, TrackSuccess, GetAlbum, GetArtist } from '../store/tracks.action';
@Component({
  selector: 'app-song-display',
  templateUrl: './song-display.component.html',
  styleUrls: ['./song-display.component.scss']
})
export class SongDisplayComponent implements OnInit, OnChanges {
  @Input() trackName: string;
  constructor(private spotateService: SpotateService, private store: Store<{ tracks: any, albums:any, artists:any }>) { }
  albums;
  artists;
  tracks;

  ngOnInit() {

  }
  ngOnChanges() {
    this.store.dispatch(new GetTrack(this.trackName));
    console.log(this.store.pipe(select('tracks')));
    this.store.select((state)=>{
      return state.tracks.tracks;
    }).pipe().subscribe((tracks)=>{
      this.tracks = tracks
    })
    this.store.dispatch(new GetAlbum(this.trackName));
    console.log(this.store.pipe(select('albums')));
    this.store.select((state)=>{
      return state.albums.albums;
    }).pipe().subscribe((albums)=>{
      this.albums = albums
    })
    this.store.dispatch(new GetArtist(this.trackName));
    console.log(this.store.pipe(select('artists')));
    this.store.select((state)=>{
      return state.artists.artists;
    }).pipe().subscribe((artists)=>{
      this.artists = artists
    })
  }
}
