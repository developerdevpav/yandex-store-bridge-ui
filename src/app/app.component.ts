import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {YandexUserState} from "./store/yandex-user/reducers";
import {setLocalUser} from "./store/yandex-user/actions";
import {YandexUser} from "./store/domain";
import {map} from "rxjs";
import {YandexStream} from "./store/service/yandex-stream-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'yandex-store-bridge';

  streams: YandexStream[] = [
    {
      id: 20,
      date: new Date(),
      name: 'yandex-stream-23',
      mediaTypes: ['MP4', 'JPEG'],
      status: 'CREATED'
    },
    {
      id: 23,
      date: new Date(),
      name: 'yandex-stream-21',
      mediaTypes: ['PNG'],
      status: 'CREATED'
    }
  ]

  constructor(public httpClient: HttpClient, private yandexUserStore: Store<YandexUserState>) {
  }

  yandexLogin() {

  }

  ngOnInit(): void {
    this.httpClient.get('/oauth2/yandex/user')
      .pipe(
        map(it => it as YandexUser)
      )
      .subscribe((yandexUser) => {
        this.yandexUserStore.dispatch(setLocalUser({yandexUser: {...yandexUser}}))
      });
  }

}
