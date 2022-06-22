import {yandexUserReducer, YandexUserState} from "./yandex-user/reducers";
import {ActionReducerMap} from "@ngrx/store";
import {reducerYandexStream, YandexStreamState} from "./yandex-stream/reducers";
import {MimeTypeState, reducerMimeType} from "./mime-type/reducers";

export interface State {
  yandexUserState: YandexUserState;
  yandexStreamState: YandexStreamState;
  mimeTypeState: MimeTypeState;
}


export const reducers: ActionReducerMap<State> = {
  yandexUserState: yandexUserReducer,
  yandexStreamState: reducerYandexStream,
  mimeTypeState: reducerMimeType
}
