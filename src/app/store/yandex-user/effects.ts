import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {YandexStream, YandexStreamService} from "../service/yandex-stream-service";
import {mergeMap} from "rxjs";
import {YandexUser} from "../domain";
import {YandexUserService} from "../service/yandex-user-service";


@Injectable()
export class YandexUserEffects {

  constructor(private action$: Actions, private yandexUserService: YandexUserService) {
  }



}
