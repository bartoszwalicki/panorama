import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramaDisplayPageComponent } from './panorama-display-page.component';

describe('PanoramaDisplayPageComponent', () => {
  let component: PanoramaDisplayPageComponent;
  let fixture: ComponentFixture<PanoramaDisplayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanoramaDisplayPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanoramaDisplayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
