import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanoramaCatalogComponent } from './panorama-catalog.component';

describe('PanoramaCatalogComponent', () => {
  let component: PanoramaCatalogComponent;
  let fixture: ComponentFixture<PanoramaCatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanoramaCatalogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanoramaCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
