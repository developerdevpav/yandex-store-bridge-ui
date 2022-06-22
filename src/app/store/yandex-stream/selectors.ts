import {State} from "../index";
import {createSelector} from "@ngrx/store";
import {YandexStreamState} from "./reducers";
import {YandexStream} from "../service/yandex-stream-service";

export const selectStateYandexStream = (state: State) => state.yandexStreamState;

export const selectYandexStream = createSelector(
  selectStateYandexStream, (yandexStreamState: YandexStreamState) => yandexStreamState.streams as YandexStream[]
)
