import {yandexUserReducer, YandexUserStoreState} from "./yandex-user/reducers";
import {ActionReducerMap} from "@ngrx/store";

export interface State {
  yandexStore: YandexUserStoreState;
}


export const reducers: ActionReducerMap<State> = {
  yandexStore: yandexUserReducer
}
