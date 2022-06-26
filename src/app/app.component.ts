import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {YandexUserState} from "./store/yandex-user/reducers";
import {reqYandexUserFromServer} from "./store/yandex-user/actions";
import {YandexStream} from "./store/domain";

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
      mediaTypes: [{name: 'MP4'}, { name: 'JPEG' }],
      status: 'CREATED'
    },
    {
      id: 23,
      date: new Date(),
      name: 'yandex-stream-21',
      mediaTypes: [{ name: 'PNG' }],
      status: 'CREATED'
    }
  ]

  constructor(private yandexUserStore: Store<YandexUserState>) {
  }

  ngOnInit(): void {
    this.yandexUserStore.dispatch(reqYandexUserFromServer());
  }

}
