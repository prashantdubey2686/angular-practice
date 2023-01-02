import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddjobComponent } from './addjob.component';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

describe('AddjobComponent', () => {
  let component: AddjobComponent;
  let fixture: ComponentFixture<AddjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddjobComponent ],
      providers: [FormBuilder,{
        provide: ActivatedRoute,
        useValue: {
          snapshot: { paramMap: {get:()=>{return ''}}}
        }
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
