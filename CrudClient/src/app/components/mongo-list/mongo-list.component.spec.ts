import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoListComponent } from './mongo-list.component';

describe('MongoListComponent', () => {
  let component: MongoListComponent;
  let fixture: ComponentFixture<MongoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MongoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
