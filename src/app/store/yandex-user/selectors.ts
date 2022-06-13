import {createSelector} from "@ngrx/store";
import {State} from "../index";


export const selectStateYandexUser = (state: State) => state.yandexStore;

export const selectYandexUser = createSelector(
  selectStateYandexUser, (yandexUserStore) => yandexUserStore.userinfo
)

export const selectGoogleUser = createSelector(
  selectStateYandexUser, (yandexUserStore) => {
    if (yandexUserStore.userinfo) {
      return yandexUserStore.userinfo.authGoogle;
    }
    return false;
  }
)
