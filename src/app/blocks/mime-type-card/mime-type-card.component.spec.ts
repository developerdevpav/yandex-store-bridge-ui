import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MimeTypeCardComponent } from './mime-type-card.component';

describe('MimeTypeCardComponent', () => {
  let component: MimeTypeCardComponent;
  let fixture: ComponentFixture<MimeTypeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MimeTypeCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MimeTypeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
