import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {YandexUserState} from "../../store/yandex-user/reducers";
import {Observable} from "rxjs";
import {YandexUser} from "../../store/domain";
import {setLocalUser} from "../../store/yandex-user/actions";
import {selectYandexUser} from "../../store/yandex-user/selectors";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  yandexUser: YandexUser | undefined;

  @Output()
  public onLogin = new EventEmitter()

  constructor(public yandexUserStore: Store<any>) {
  }

  ngOnInit(): void {
    this.yandexUserStore.select(selectYandexUser).subscribe(yandexUser => {
      this.yandexUser = yandexUser;
    }, error => console.log(error));
  }

  yandexLogin = () => this.yandexUserStore.dispatch(setLocalUser({yandexUser: undefined}));

}
