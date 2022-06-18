import {createAction, props} from "@ngrx/store";
import {YandexStream} from "../service/yandex-stream-service";

export enum YandexStreamAction {
  LOAD_YANDEX_STREAM = '[LOAD-YANDEX-STREAM] Load yandex streams from server',
  SET_YANDEX_STREAM = '[SET YANDEX STREAMS] Set yandex streams to store'
}

type YandexStreamType = { streams: YandexStream[] };

export const serverYandexStream = createAction(YandexStreamAction.LOAD_YANDEX_STREAM)

export const storeYandexStream = createAction(YandexStreamAction.SET_YANDEX_STREAM, props<YandexStreamType>())
