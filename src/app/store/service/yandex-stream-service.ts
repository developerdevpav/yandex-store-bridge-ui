import {YandexUser} from "../domain";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface YandexStream {
  id: string;
  name: string;
}

export class YandexStreamService {

  constructor(protected httpClient: HttpClient) {
  }

  public createStream = (): Observable<YandexStream> => {
    return this.httpClient.request('POST', '/api/yandex/streams') as Observable<YandexStream>;
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
