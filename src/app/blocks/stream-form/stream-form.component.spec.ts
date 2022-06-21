import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamFormComponent } from './stream-form.component';

describe('StreamFormComponent', () => {
  let component: StreamFormComponent;
  let fixture: ComponentFixture<StreamFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
