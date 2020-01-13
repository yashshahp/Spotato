import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {
  @Input() albumArray: any
  constructor() { }
  url;
  date;
  albumCovers;
  coverUrl;
  ngOnInit() {
    if (this.albumArray) {
      this.date=this.albumArray.release_date;
      this.url = this.albumArray.external_urls.spotify
      this.albumCovers=this.albumArray.images;
      this.coverUrl=this.albumCovers[2].url
    }
  }

}
