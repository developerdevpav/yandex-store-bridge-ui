import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MimeType} from "../../store/domain";
import {Store} from "@ngrx/store";
import {YandexStreamState} from "../../store/yandex-stream/reducers";
import {serverCreateYandexStream} from "../../store/yandex-stream/actions";

@Component({
  selector: 'stream-form',
  templateUrl: './stream-form.component.html',
  styleUrls: ['./stream-form.component.scss']
})
export class StreamFormComponent implements OnInit {

  public mimeTypes: MimeType[] = [];

  public smt: {[key: string]: MimeType} = {};

  constructor(private httpClient: HttpClient, private store: Store<YandexStreamState>) { }

  ngOnInit(): void {
    setInterval(() => {
      this.httpClient.get('/api/mime-types/unclouded').subscribe(mimeTypes => {
        this.mimeTypes = mimeTypes as MimeType[];
      })
    }, 3000);
  }

  changeMimeType(mimeType: MimeType) {
    if (this.isSelected(mimeType)) {
      this.unselect(mimeType);
    } else {
      this.select(mimeType);
    }
  }

  select(mimeType: MimeType) {
    this.smt[mimeType.name] = mimeType;
  }

  unselect(mimeType: MimeType) {
    delete this.smt[mimeType.name];
  }

  isSelected(mimeType: MimeType): boolean {
    return !!this.smt[mimeType.name];
  }

  runStream() {
    const keys = Object.keys(this.smt);

    const bodyReq = {id: null, mediaTypes: keys};

    const yandexStreamAction = serverCreateYandexStream(bodyReq);

    this.store.dispatch(yandexStreamAction);
  }
}
