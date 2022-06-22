import {createAction, props} from "@ngrx/store";
import {RequestCreateYandexStream, YandexStream} from "../domain";

export enum YandexStreamAction {
  LOAD_YANDEX_STREAM = '[LOAD-YANDEX-STREAM] Load yandex streams from server',
  SET_YANDEX_STREAMS = '[SET YANDEX STREAMS] Set yandex streams to store',
  CREATE_YANDEX_STREAM = '[CREATE YANDEX STREAM] Create yandex streams to store',
  SET_YANDEX_STREAM = '[SET YANDEX STREAM] Create yandex streams to store'
}

type YandexStreamsType = { streams: YandexStream[] };

type YandexStreamType = { stream: YandexStream };

export const serverYandexStream = createAction(YandexStreamAction.LOAD_YANDEX_STREAM)

export const serverCreateYandexStream = createAction(YandexStreamAction.CREATE_YANDEX_STREAM, props<RequestCreateYandexStream>())

export const storeYandexStreams = createAction(YandexStreamAction.SET_YANDEX_STREAMS, props<YandexStreamsType>())

export const storeYandexStream = createAction(YandexStreamAction.SET_YANDEX_STREAM, props<YandexStreamType>())
