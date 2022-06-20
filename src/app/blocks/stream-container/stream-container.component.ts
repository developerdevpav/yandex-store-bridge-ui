import {Component, Input, OnInit} from '@angular/core';
import {YandexStream} from "../../store/service/yandex-stream-service";

@Component({
  selector: 'stream-container',
  templateUrl: './stream-container.component.html',
  styleUrls: ['./stream-container.component.scss']
})
export class StreamContainerComponent implements OnInit {

  @Input()
  streams: YandexStream[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
