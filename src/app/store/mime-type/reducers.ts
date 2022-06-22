import {MimeType} from "../domain";
import {createReducer, on} from "@ngrx/store";
import {setStoreUncloudedMimeType} from "./actions";

export interface MimeTypeState {
  unclouded: MimeType[];
}

export const initializedMimeTypeState: MimeTypeState = {
  unclouded: []
};

export const reducerMimeType = createReducer(
  initializedMimeTypeState,
  on(setStoreUncloudedMimeType, (state, props) => ({ ...state, unclouded: props.mimeTypes }))
);
