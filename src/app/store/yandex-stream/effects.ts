import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {YandexStreamService} from "../service/yandex-stream-service";
import {catchError, map, mergeMap, of} from "rxjs";
import {serverCreateYandexStream, storeYandexStream, storeYandexStreams, YandexStreamAction} from "./actions";
import {RequestCreateYandexStream, YandexStream} from "../domain";

@Injectable()
export class YandexStreamEffects {

  constructor(private actions$: Actions, private yandexStreamService: YandexStreamService) {}


  @Effect()
  public createStream = this.actions$.pipe(
    ofType(serverCreateYandexStream),
    map((action) => {
      return { id: action.id, mediaTypes: action.mediaTypes }
    }),
    mergeMap((request: RequestCreateYandexStream) =>
      this.yandexStreamService.createStream(request)
        .pipe(
          map((stream: YandexStream) => {
            return storeYandexStream({ stream })
          })
        )
    )
  )

  @Effect()
  public getStreams = this.actions$.pipe(
    ofType(YandexStreamAction.LOAD_YANDEX_STREAM),
    mergeMap(() =>
      this.yandexStreamService.getStreams()
        .pipe(
          map((streams: YandexStream[]) => storeYandexStreams({ streams: streams })),
          catchError((err: any) => {
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
