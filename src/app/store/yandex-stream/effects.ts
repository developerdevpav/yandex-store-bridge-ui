import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {YandexStreamService} from "../service/yandex-stream-service";
import {catchError, map, mergeMap, of} from "rxjs";
import {storeYandexStream, YandexStreamAction} from "./actions";

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
    ofType(YandexStreamAction.LOAD_YANDEX_STREAM),
    mergeMap(() =>
      this.yandexStreamService.getStreams()
        .pipe(
          map(
            (streams) =>
              storeYandexStream({ streams: streams })
          ),
          catchError((err, caught) => {
            console.log('catchError ' + err.getMessage())
            return of()
          })
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
