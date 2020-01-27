import { Injectable } from '@angular/core';
import { SpotateService } from '../spotate.service';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { TrackActionTypes, GetTrack, TrackSuccess, AlbumSuccess, GetAlbum, GetArtist, ArtistSuccess } from './tracks.action';
import { switchMap, map } from 'rxjs/operators';
@Injectable()

export class TracksEffects {
    constructor(private spotate: SpotateService,
        private action$: Actions) { }

    @Effect()
    getTracks$ = this.action$.pipe(
        ofType(TrackActionTypes.GET_TRACK),
        switchMap((action: GetTrack) => {
            return this.spotate.getTracks(action.trackName).pipe(
                map((response: any) => {
                    return new TrackSuccess(response.tracks.items)
                })
            );
        }))

    @Effect()
    getAlbums$ = this.action$.pipe(
        ofType(TrackActionTypes.GET_ALBUM),
        switchMap((action: GetAlbum) => {
            return this.spotate.getTracks(action.albumName).pipe(
                map((response: any) => {
                    return new AlbumSuccess(response.albums.items)
                })
            );
        }))
    @Effect()
    getArtists$ = this.action$.pipe(
        ofType(TrackActionTypes.GET_ARTIST),
        switchMap((action: GetArtist) => {
            return this.spotate.getTracks(action.artistName).pipe(
                map((response: any) => {
                    return new ArtistSuccess(response.artists.items)
                })
            );
        }))
}