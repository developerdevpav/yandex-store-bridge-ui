import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'stream-card',
  templateUrl: './stream-card.component.html',
  styleUrls: ['./stream-card.component.scss']
})
export class StreamCardComponent implements OnInit {

  @Input()
  public name: string | undefined;

  @Input()
  public mimes: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
