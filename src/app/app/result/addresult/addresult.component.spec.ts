import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresultComponent } from './addresult.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

describe('AddresultComponent', () => {
  let component: AddresultComponent;
  let fixture: ComponentFixture<AddresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddresultComponent ],providers: [FormBuilder,{
        provide: ActivatedRoute,
        useValue: {
          snapshot: { paramMap: {get:()=>{return ''}}}
        }
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
