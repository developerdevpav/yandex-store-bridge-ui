import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../store";
import {serverCreateYandexStream, serverYandexStream} from "../../store/yandex-stream/actions";
import {selectYandexStream} from "../../store/yandex-stream/selectors";
import {YandexStream} from "../../store/service/yandex-stream-service";

@Component({
  selector: 'app-stream-page',
  templateUrl: './stream-page.component.html',
  styleUrls: ['./stream-page.component.scss']
})
export class StreamPageComponent implements OnInit {

  public streams: YandexStream[] = [];

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(serverYandexStream());
    this.store.select(selectYandexStream).subscribe(streams => this.streams = streams)
  }

  createStream() {
    this.store.dispatch(serverCreateYandexStream({id: null, mediaTypes: ['png']}))
  }
}
