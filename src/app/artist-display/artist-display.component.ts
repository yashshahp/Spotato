import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotateService } from '../spotate.service';
@Component({
  selector: 'app-artist-display',
  templateUrl: './artist-display.component.html',
  styleUrls: ['./artist-display.component.scss']
})
export class ArtistDisplayComponent implements OnInit {
  id;
  topTracks: any;
  artistAlbums: any;
  relatedArtists: any;
  backg: any;
  artistName: any;
  followers: any;
  constructor(private activatedRoute: ActivatedRoute, private spotateService: SpotateService) {
    this.activatedRoute.params.subscribe(data => {
      this.id = data.artistId;
    })
  }

  ngOnInit() {
    this.spotateService.getTopTracks(this.id)
      .subscribe((data: any) => {
        this.topTracks = data.tracks

      });
    this.spotateService.getAlbums(this.id)
      .subscribe((data: any) => {
        this.artistAlbums = data.items


      });
    this.spotateService.getRelated(this.id)
      .subscribe((data: any) => {
        this.relatedArtists = data.artists

      });
      this.spotateService.getArtist(this.id)
      .subscribe((data: any) => {

        this.backg=data.images[0].url
        this.artistName=data.name
        this.followers=data.followers.total
      });
  }

}
