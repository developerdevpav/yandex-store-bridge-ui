import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MimeType} from "../../store/domain";
import {Store} from "@ngrx/store";
import {serverCreateYandexStream} from "../../store/yandex-stream/actions";
import {Selector} from "../../utils/selector";
import {loadUncloudedMimeType} from "../../store/mime-type/actions";
import {selectUncloudedMimeTypes} from "../../store/mime-type/selectors";
import {State} from "../../store";

@Component({
  selector: 'stream-form',
  templateUrl: './stream-form.component.html',
  styleUrls: ['./stream-form.component.scss']
})
export class StreamFormComponent implements OnInit {

  public mimeTypes: MimeType[] = [];

  public mimeTypeSelector = new Selector<MimeType>('name')

  constructor(private httpClient: HttpClient, private localStore: Store<State>) { }


  ngOnInit(): void {
    this.localStore.dispatch(loadUncloudedMimeType());

    this.localStore.select(selectUncloudedMimeTypes).subscribe(mimeTypes => this.mimeTypes = mimeTypes)
  }

  runStream() {
    const keys = this.mimeTypeSelector.collect().keys();

    const bodyReq = {id: null, mediaTypes: keys};

    const yandexStreamAction = serverCreateYandexStream(bodyReq);

    this.localStore.dispatch(yandexStreamAction);
  }

}
