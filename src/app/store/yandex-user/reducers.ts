import {YandexUser} from "../domain";
import {createReducer, on} from "@ngrx/store";
import {setLocalUser} from "./actions";


export interface YandexUserState {
  userinfo?: YandexUser;
  urlRedirect?: string;
}

export const yandexUserStoreState: YandexUserState = {
  userinfo: undefined,
  urlRedirect: undefined
}

export const yandexUserReducer = createReducer(
  yandexUserStoreState,
  on(setLocalUser, (state, props) => ({...state, userinfo: props.yandexUser}))
)


