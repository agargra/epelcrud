import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysqlListComponent } from './mysql-list.component';

describe('MysqlListComponent', () => {
  let component: MysqlListComponent;
  let fixture: ComponentFixture<MysqlListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysqlListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysqlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
