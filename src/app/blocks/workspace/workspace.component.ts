import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../store";
import {selectGoogleUser, selectYandexUser} from "../../store/yandex-user/selectors";
import {YandexUser} from "../../store/domain";

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  yandexUser: YandexUser | undefined;

  googleAuth: boolean | undefined;

  constructor(public store: Store<State>) { }

  ngOnInit(): void {
    this.store.select(selectYandexUser).subscribe(yandexUser => {
      this.yandexUser = yandexUser;
    });

    this.store.select(selectGoogleUser).subscribe(auth => {
      this.googleAuth = auth;
    })
  }

}
