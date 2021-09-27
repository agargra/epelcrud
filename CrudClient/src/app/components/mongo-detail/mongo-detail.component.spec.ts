import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoDetailComponent } from './mongo-detail.component';

describe('MongoDetailComponent', () => {
  let component: MongoDetailComponent;
  let fixture: ComponentFixture<MongoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MongoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
