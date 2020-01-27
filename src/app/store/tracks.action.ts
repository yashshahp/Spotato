import { Action } from '@ngrx/store';

export enum TrackActionTypes{
    GET_TRACK = '[Tracks] Get Track Details',
    GET_TRACK_SUCCESS = '[Tracks] Get Track Success',
    GET_ALBUM = '[Tracks] Get Album Details',
    GET_ALBUM_SUCCESS = '[Tracks] Get Albums Success',
    GET_ARTIST = '[Tracks] Get Artist Details',
    GET_ARTIST_SUCCESS = '[Tracks] Get Artist Success',
}

export class GetTrack implements Action {
    readonly type: string = TrackActionTypes.GET_TRACK;
    constructor(public trackName:string) { }
}

export class TrackSuccess implements Action {
    readonly type: string = TrackActionTypes.GET_TRACK_SUCCESS;
    constructor(public tracks:any) { }
}

export class GetAlbum implements Action {
    readonly type: string = TrackActionTypes.GET_ALBUM;
    constructor(public albumName:string) { }
}

export class AlbumSuccess implements Action {
    readonly type: string = TrackActionTypes.GET_ALBUM_SUCCESS;
    constructor(public albums:any) { }
}

export class GetArtist implements Action {
    readonly type: string = TrackActionTypes.GET_ARTIST;
    constructor(public artistName:string) { }
}

export class ArtistSuccess implements Action {
    readonly type: string = TrackActionTypes.GET_ARTIST_SUCCESS;
    constructor(public artists:any) { }
}