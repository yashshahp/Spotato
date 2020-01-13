import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-artists-details',
  templateUrl: './artists-details.component.html',
  styleUrls: ['./artists-details.component.scss']
})
export class ArtistsDetailsComponent implements OnInit {
  @Input() trackArtist:any 

  

  constructor(private router:Router) { }

  ngOnInit() {

  }
  showDetail(id){
 
    this.router.navigate(["artist",id])
  }
}
