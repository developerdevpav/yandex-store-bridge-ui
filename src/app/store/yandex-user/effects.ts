import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {YandexStream, YandexStreamService} from "../service/yandex-stream-service";
import {mergeMap} from "rxjs";
import {YandexUser} from "../domain";
import {YandexUserService} from "../service/yandex-user-service";

@Injectable()
export class YandexStreamEffects {

  constructor(private actions$: Actions, private yandexStreamService: YandexStreamService) {}

  @Effect()
  public createStream = this.actions$.pipe(
    ofType('[CREATE YANDEX STREAM]'),
    mergeMap(() =>
      this.yandexStreamService.createStream()
        .pipe(
          // TODO написать добавление в Store
        )
    )
  )

  @Effect()
  public getStreams = this.actions$.pipe(
    ofType('[GET YANDEX STREAMS]'),
    mergeMap(() =>
      this.yandexStreamService.getStreams()
        .pipe(
          // TODO написать добавление потоков в Store
        )
    )
  )

  @Effect()
  public interruptStream = this.actions$.pipe(
    ofType('[INTERRUPT THE YANDEX STREAM]'),
    mergeMap((id: number) =>
      this.yandexStreamService.interruptStream(id).pipe(
        // TODO написать прерывание потока и запись в Store
      )
    )
  )

}

@Injectable()
export class YandexUserEffects {

  constructor(private action$: Actions, private yandexUserService: YandexUserService) {
  }



}
