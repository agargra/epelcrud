import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-mongo-add',
  templateUrl: './mongo-add.component.html',
  styleUrls: ['./mongo-add.component.css']
})
export class MongoAddComponent implements OnInit {

  mongotestForm: FormGroup;
	
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) { 
    this.mongotestForm = this.formBuilder.group({
      name: [''],
      description: [''],
    })
  }

  ngOnInit(): void {}
  onSubmit(): any {
    this.crudService.AddMongotest(this.mongotestForm.value)
    .subscribe(() => {
        console.log('Mongotest added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/mongo-list'))
      }, (err) => {
        console.log(err);
    });
  }	

}
