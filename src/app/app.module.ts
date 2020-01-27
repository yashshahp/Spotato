import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule,MatButtonModule,MatFormFieldModule,MatToolbarModule,MatIconModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SongDisplayComponent } from './song-display/song-display.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SongDetailsComponent } from './song-details/song-details.component';
import {MatCardModule} from '@angular/material';
import { ArtistsDetailsComponent } from './artists-details/artists-details.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { ArtistsComponent } from './artists/artists.component';
import { ArtistDisplayComponent } from './artist-display/artist-display.component';
import { RequestInterceptor } from './request.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TracksEffects } from './store/tracks.effects';
import {reducer} from './store/tracks.reducer'


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SongDisplayComponent,
    SongDetailsComponent,
    ArtistsDetailsComponent,
    AlbumDetailsComponent,
    ArtistsComponent,
    ArtistDisplayComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatDividerModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    StoreModule.forRoot({tracks:reducer, albums:reducer, artists:reducer}),
    EffectsModule.forRoot([TracksEffects]),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],

})
export class AppModule { }
