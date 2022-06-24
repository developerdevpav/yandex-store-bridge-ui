import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../../store";
import {serverYandexStream} from "../../store/yandex-stream/actions";
import {selectYandexStream} from "../../store/yandex-stream/selectors";
import {YandexStream} from "../../store/domain";
import {loadUncloudedMimeType, setStoreUncloudedMimeType} from "../../store/mime-type/actions";

@Component({
  selector: 'app-stream-page',
  templateUrl: './stream-page.component.html',
  styleUrls: ['./stream-page.component.scss']
})
export class StreamPageComponent implements OnInit {

  public streams: YandexStream[] = [];

  constructor(private localStore: Store<State>) {
  }


  ngOnInit(): void {
    this.localStore.dispatch(serverYandexStream());

    this.localStore.select(selectYandexStream).subscribe(streams => {
      this.localStore.dispatch(loadUncloudedMimeType());

      this.streams = streams
    });
  }

}
