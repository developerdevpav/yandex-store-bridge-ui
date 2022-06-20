import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'stream-card',
  templateUrl: './stream-card.component.html',
  styleUrls: ['./stream-card.component.scss']
})
export class StreamCardComponent implements OnInit {

  private mapStatus: {[key: string] : string} = {
    'CREATED': 'Создан',
    'RUNNABLE': 'В работе',
    'INTERRUPTED': 'Прерван',
    'EXCEPTION': 'Ошибка при выполнении',
    'COMPLETED': 'Выполнен',
    'RESUME': 'Возабнавлен'
  }

  @Input()
  public name: string | undefined;

  @Input()
  public mimes: string[] | undefined = [];

  @Input()
  public date: Date | undefined = new Date();

  public _status: string | undefined;

  @Input()
  set status(status: string | undefined) {
    this._status = this.mapStatus[status || ''];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
