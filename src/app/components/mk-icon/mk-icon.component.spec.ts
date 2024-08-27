import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkIconComponent } from './mk-icon.component';

describe('MkIconComponent', () => {
  let component: MkIconComponent;
  let fixture: ComponentFixture<MkIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MkIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MkIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
