import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlAddComponent } from './mysql-add.component';

describe('MysqlAddComponent', () => {
  let component: MysqlAddComponent;
  let fixture: ComponentFixture<MysqlAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysqlAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysqlAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
