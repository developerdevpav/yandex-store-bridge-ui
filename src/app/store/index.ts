import {yandexUserReducer, YandexUserState} from "./yandex-user/reducers";
import {ActionReducerMap} from "@ngrx/store";
import {reducerYandexStream, YandexStreamState} from "./yandex-stream/reducers";

export interface State {
  yandexUser: YandexUserState;
  yandexStream: YandexStreamState
}


export const reducers: ActionReducerMap<State> = {
  yandexUser: yandexUserReducer,
  yandexStream: reducerYandexStream
}
