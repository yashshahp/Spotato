import { Component, OnInit, Input } from '@angular/core';
import { SpotateService } from '../spotate.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  @Input() artistArray: any
  constructor(private spotateService: SpotateService) { }
  followers;
  url;
  name;
  artistCovers;
  coverUrl;
  ngOnInit() {
    if (this.artistArray) {
      this.followers = this.artistArray.followers.total
      this.name = this.artistArray.name
      if (this.artistArray.external_urls.spotify) {
        this.url = this.artistArray.external_urls.spotify
      }

      this.artistCovers = this.artistArray.images;
      let n = this.artistCovers.length
      if (this.artistArray.images) {
        if(n>0){
          this.coverUrl = this.artistCovers[n - 1].url
        }
        
      }

    }
  }

}
