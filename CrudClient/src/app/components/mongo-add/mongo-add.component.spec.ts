import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoAddComponent } from './mongo-add.component';

describe('MongoAddComponent', () => {
  let component: MongoAddComponent;
  let fixture: ComponentFixture<MongoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MongoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
