import {createAction, props} from "@ngrx/store";
import {YandexUser} from "../domain";

type YandexUserOrUndefined = YandexUser | undefined;

type YandexRedirectUrl = string | undefined;

export const setLocalUser = createAction('[MUTATION] SET YANDEX USER TO LOCAL STORAGE', props<{yandexUser: YandexUserOrUndefined}>());

export const setUrlAuthorization = createAction('[MUTATION] SET YANDEX REDIRECT', props<{url: YandexRedirectUrl}>());

export const reqYandexUserFromServer = createAction('[MUTATION] REQUEST YANDEX USER FROM SERVER');
