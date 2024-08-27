import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkBtnComponent } from './mk-btn.component';

describe('MkBtnComponent', () => {
  let component: MkBtnComponent;
  let fixture: ComponentFixture<MkBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MkBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MkBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
