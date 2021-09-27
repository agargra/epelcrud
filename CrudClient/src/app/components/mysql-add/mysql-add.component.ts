import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-mysql-add',
  templateUrl: './mysql-add.component.html',
  styleUrls: ['./mysql-add.component.css']
})
export class MysqlAddComponent implements OnInit {

  mysqltestForm: FormGroup;
	
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.mysqltestForm = this.formBuilder.group({
      name: [''],
      description: [''],
    })
  }

  ngOnInit(): void {}
  onSubmit(): any {
    this.crudService.AddMysqltest(this.mysqltestForm.value)
    .subscribe(() => {
        console.log('Mysqltest added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/mysql-list'))
      }, (err) => {
        console.log(err);
    });
  }	

}
