import {YandexUser} from "../domain";
import {YandexStream} from "../service/yandex-stream-service";
import {createReducer, on} from "@ngrx/store";
import {storeYandexStream, storeYandexStreams, YandexStreamAction} from "./actions";

export interface YandexStreamState {
  streams?: YandexStream[];
  entities?: {[key: string]: YandexStream}
}

export const yandexStreamState: YandexStreamState = {
  streams: [],
  entities: {}
}

export const reducerYandexStream = createReducer(yandexStreamState,
  on(storeYandexStreams, (state, props) => funcSetState(state, props)),
  on(storeYandexStream, (state, props) => {
    const arr: YandexStream[] = [];

    if (state && state.streams) {
      arr.push(...state.streams);
    }

    arr.push(props.stream);

    return funcStreamSetState(state, arr);
  })
)

const funcStreamSetState = (state: YandexStreamState, streams: YandexStream[]) => {
  return funcSetState(state, { streams })
}

const funcSetState = (state: YandexStreamState, props: { streams: YandexStream[]}) => {
  let entities: {[key: string]: YandexStream} = {};

  props.streams
    .sort((stream1, stream2) => new Date(stream2.date).getTime() - new Date(stream1.date).getTime())
    .forEach(it => entities[it.id] = it);

  return {
    ...state,
    streams: props.streams,
    entities
  }
}
