import { Action } from '@ngrx/store';
import { TrackActionTypes, GetTrack, GetAlbum, GetArtist, TrackSuccess, AlbumSuccess, ArtistSuccess } from './tracks.action';

const initialState = {
    tracks: [],
    albums: [],
    artists: []
}

export function reducer(state: any = initialState, action: Action): any {
    switch (action.type) {
        case TrackActionTypes.GET_TRACK_SUCCESS:
            return Object.assign({}, state, { tracks: (action as TrackSuccess).tracks });
        case TrackActionTypes.GET_ALBUM_SUCCESS:
            return Object.assign({}, state, { albums: (action as AlbumSuccess).albums });
        case TrackActionTypes.GET_ARTIST_SUCCESS:
            return Object.assign({}, state, { artists: (action as ArtistSuccess).artists });
        default:
            return state;
    }
}