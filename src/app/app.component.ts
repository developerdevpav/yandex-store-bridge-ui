import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {YandexUserStoreState} from "./store/yandex-user/reducers";
import {setLocalUser, setUrlAuthorization} from "./store/yandex-user/actions";
import {YandexUser} from "./store/domain";
import {map} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'yandex-store-bridge';

  constructor(public httpClient: HttpClient, private yandexUserStore: Store<YandexUserStoreState>) {
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
      }, error => {
        console.log(error);
        // this.yandexUserStore.dispatch(setUrlAuthorization({url: error}))
      });
  }

}
