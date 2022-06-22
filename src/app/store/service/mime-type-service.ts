import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MimeType} from "../domain";

@Injectable({providedIn: 'root'})
export class MimeTypeService {

  constructor(protected httpClient: HttpClient) {
  }

  public getUncloudedMimeTypes(): Observable<MimeType[]> {
    return this.httpClient.get('/api/mime-types/unclouded') as Observable<MimeType[]>;
  }

}
