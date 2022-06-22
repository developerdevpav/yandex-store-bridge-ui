import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {YandexUserService} from "../service/yandex-user-service";
import {reqYandexUserFromServer, setLocalUser} from "./actions";
import {catchError, map, mergeMap, of} from "rxjs";
import {YandexUser} from "../domain";


@Injectable()
export class YandexUserEffects {

  constructor(private action$: Actions, private yandexUserService: YandexUserService) {
  }

  @Effect()
  public oauth2YandexUser = this.action$.pipe(
    ofType(reqYandexUserFromServer),
    mergeMap(() => this.yandexUserService.getYandexUser().pipe(
        map(
          (yandexUser: YandexUser) => setLocalUser({yandexUser}),
          catchError((err) => of())
        )
      )
    )
  )

}
