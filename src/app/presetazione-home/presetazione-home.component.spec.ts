import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetazioneHomeComponent } from './presetazione-home.component';

describe('PresetazioneHomeComponent', () => {
  let component: PresetazioneHomeComponent;
  let fixture: ComponentFixture<PresetazioneHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresetazioneHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresetazioneHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
