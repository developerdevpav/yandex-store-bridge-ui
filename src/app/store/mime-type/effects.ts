import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {YandexStreamService} from "../service/yandex-stream-service";
import {MimeTypeService} from "../service/mime-type-service";
import {loadUncloudedMimeType, setStoreUncloudedMimeType} from "./actions";
import {catchError, map, mergeMap, of} from "rxjs";
import {MimeType} from "../domain";

@Injectable({ providedIn: 'root' })
export class MimeTypeEffects {

  constructor(private actions$: Actions, private mimeTypeService: MimeTypeService) {}

  @Effect()
  public getUncloudedMimeType = this.actions$.pipe(
    ofType(loadUncloudedMimeType),
    mergeMap(() =>
      this.mimeTypeService.getUncloudedMimeTypes().pipe(
        map(
          (mimeTypes: MimeType[]) => setStoreUncloudedMimeType({ mimeTypes }),
          catchError((err) => of())
        )
      )
    )
  )

}
