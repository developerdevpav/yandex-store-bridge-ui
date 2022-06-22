import {createAction, props} from "@ngrx/store";
import {MimeType} from "../domain";

export enum MimeTypeAction {
  LOAD_UNCLOUDED_MIME_TYPE = '[LOAD UNCLOUDED MIME TYPE] Load mime type',
  SET_UNCLOUDED_MIME_TYPE = '[SET UNCLOUDED MIME TYPE] Load mime type'
}

export interface SetUncloudedMimeTypeProps {
  mimeTypes: MimeType[];
}

export const loadUncloudedMimeType = createAction(MimeTypeAction.LOAD_UNCLOUDED_MIME_TYPE);

export const setStoreUncloudedMimeType = createAction(
  MimeTypeAction.SET_UNCLOUDED_MIME_TYPE,
  props<SetUncloudedMimeTypeProps>()
);
