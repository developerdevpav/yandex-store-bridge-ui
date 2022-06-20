import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'mime-type-card',
  templateUrl: './mime-type-card.component.html',
  styleUrls: ['./mime-type-card.component.scss']
})
export class MimeTypeCardComponent implements OnInit {

  @Input()
  public name: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
