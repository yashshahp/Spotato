import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SongDisplayComponent } from './song-display/song-display.component';
import { SearchComponent } from './search/search.component';
import { ArtistDisplayComponent } from './artist-display/artist-display.component';



const routes: Routes = [  {path:'artist/:artistId',component:ArtistDisplayComponent},
{path:'',component:SearchComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
