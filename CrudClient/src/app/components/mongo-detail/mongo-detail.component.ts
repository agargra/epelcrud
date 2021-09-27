import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-mongo-detail',
  templateUrl: './mongo-detail.component.html',
  styleUrls: ['./mongo-detail.component.css']
})
export class MongoDetailComponent implements OnInit {
  getId: any;
  updateForm: FormGroup;
	
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private crudService: CrudService	
	) { 
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');
    this.crudService.GetMongotest(this.getId).subscribe(res => {
      this.updateForm.setValue({
        name: res['name'],
        description: res['description'],
      });
    });
    this.updateForm = this.formBuilder.group({
      name: [''],
      description: [''],
    })	
	}

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.crudService.updateMongotest(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('mongotest updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/mongo-list'))
      }, (err) => {
        console.log(err);
    });
  }

}
