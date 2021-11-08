import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MioBodyComponent } from './mio-body.component';

describe('MioBodyComponent', () => {
  let component: MioBodyComponent;
  let fixture: ComponentFixture<MioBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MioBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MioBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
