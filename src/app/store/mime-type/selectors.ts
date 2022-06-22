import {State} from "../index";
import {createSelector} from "@ngrx/store";
import {MimeType} from "../domain";

export const selectorMimeTypeState = (state: State) => state.mimeTypeState;

export const selectUncloudedMimeTypes = createSelector(selectorMimeTypeState, (state) => {
  return state.unclouded as MimeType[];
})
