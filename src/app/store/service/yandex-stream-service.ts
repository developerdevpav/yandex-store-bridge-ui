import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

export interface YandexStream {
  id: number;
  name: string;
  status: string;
  mediaTypes: string[] | undefined;
  date: Date;
}

export class RequestCreateYandexStream {
  id: string | null = null;
  mediaTypes: string[] = [];
}

@Injectable({ providedIn: 'root' })
export class YandexStreamService {

  constructor(protected httpClient: HttpClient) {
  }

  public createStream = (request: RequestCreateYandexStream): Observable<YandexStream> => {
    return this.httpClient.request('POST', '/api/yandex/streams/upload-google-page',
      {
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(request)
      }) as Observable<YandexStream>;
  }

  public interruptStream = (id: number) => {
    return this.httpClient.request('PUT', '/api/yandex/streams', {
      params: {
        thread: id
      }
    }) as Observable<YandexStream>;
  }

  public getStreams = (): Observable<YandexStream[]> => {
    return this.httpClient.get('/api/yandex/streams') as Observable<YandexStream[]>;
  }

}
