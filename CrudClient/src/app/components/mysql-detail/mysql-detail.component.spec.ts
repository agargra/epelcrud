import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlDetailComponent } from './mysql-detail.component';

describe('MysqlDetailComponent', () => {
  let component: MysqlDetailComponent;
  let fixture: ComponentFixture<MysqlDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysqlDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysqlDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
