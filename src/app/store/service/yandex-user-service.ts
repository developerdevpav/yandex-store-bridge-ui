import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {YandexUser} from "../domain";

export class YandexUserService {

  constructor(protected httpClient: HttpClient) {
  }

  public getYandexUser = (): Observable<YandexUser> => {
    return this.httpClient.get('/api/yandex/user');
  }

  public yandexAuthorization = (): Observable<any> => {
    return this.httpClient.get("/oauth2/yandex/authorization");
  }

}
