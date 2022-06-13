import {YandexUser} from "../domain";
import {createReducer, on} from "@ngrx/store";
import {setLocalUser, setUrlAuthorization} from "./actions";


export interface YandexUserStoreState {
  userinfo?: YandexUser;
  urlRedirect?: string;
}

export const yandexUserStoreState: YandexUserStoreState = {
  userinfo: undefined,
  urlRedirect: undefined
}

export const yandexUserReducer = createReducer(
  yandexUserStoreState,
  on(setLocalUser, (state, props) => ({...state, userinfo: props.yandexUser})),
  on(setUrlAuthorization, (state, props) => ({...state, userinfo: undefined, urlRedirect: props.url}))
)


