import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramaThumbnailComponent } from './panorama-thumbnail.component';

describe('PanoramaThumbnailComponent', () => {
  let component: PanoramaThumbnailComponent;
  let fixture: ComponentFixture<PanoramaThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanoramaThumbnailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanoramaThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
