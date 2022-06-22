import {State} from "../index";
import {createSelector} from "@ngrx/store";
import {YandexStreamState} from "./reducers";
import {YandexStream} from "../domain";

export const selectorStateYandexStream = (state: State) => state.yandexStreamState;

export const selectYandexStream = createSelector(
  selectorStateYandexStream, (yandexStreamState: YandexStreamState) => yandexStreamState.streams || []
)
