import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddadmitcardComponent } from './addadmitcard.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

describe('AddadmitcardComponent', () => {
  let component: AddadmitcardComponent;
  let fixture: ComponentFixture<AddadmitcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddadmitcardComponent ],providers:[FormBuilder,FormBuilder,{
        provide: ActivatedRoute,
        useValue: {
          snapshot: { paramMap: {get:()=>{return ''}}}
        }
      }]
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
