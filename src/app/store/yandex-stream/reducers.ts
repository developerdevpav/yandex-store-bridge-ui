import {YandexUser} from "../domain";
import {YandexStream} from "../service/yandex-stream-service";
import {createReducer, on} from "@ngrx/store";
import {storeYandexStream, YandexStreamAction} from "./actions";

export interface YandexStreamState {
  streams?: YandexStream[];
  entities?: {[key: string]: YandexStream}
}

export const yandexStreamState: YandexStreamState = {
  streams: [],
  entities: {}
}

export const reducerYandexStream = createReducer(yandexStreamState,
  on(storeYandexStream, (state, props) => funcSetState(state, props))
)


const funcSetState = (state: YandexStreamState, props: { streams: YandexStream[]}) => {
  let entities: {[key: string]: YandexStream} = {};

  props.streams
    .sort((stream1, stream2) => stream2.date.getTime() - stream1.date.getTime())
    .forEach(it => entities[it.id] = it);

  return {
    ...state,
    streams: props.streams,
    entities
  }
}
