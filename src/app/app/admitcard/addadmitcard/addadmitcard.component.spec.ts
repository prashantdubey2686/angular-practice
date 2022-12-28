import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadmitcardComponent } from './addadmitcard.component';

describe('AddadmitcardComponent', () => {
  let component: AddadmitcardComponent;
  let fixture: ComponentFixture<AddadmitcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddadmitcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddadmitcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
