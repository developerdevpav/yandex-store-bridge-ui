import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../store";
import {serverYandexStream} from "../../store/yandex-stream/actions";

@Component({
  selector: 'app-stream-page',
  templateUrl: './stream-page.component.html',
  styleUrls: ['./stream-page.component.scss']
})
export class StreamPageComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(serverYandexStream());
  }

}
