import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpSearchResultComponent } from './pop-up-search-result.component';

describe('PopUpSearchResultComponent', () => {
  let component: PopUpSearchResultComponent;
  let fixture: ComponentFixture<PopUpSearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopUpSearchResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
