import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkSubmitFormComponent } from './mk-submit-form.component';

describe('MkSubmitFormComponent', () => {
  let component: MkSubmitFormComponent;
  let fixture: ComponentFixture<MkSubmitFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MkSubmitFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MkSubmitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
