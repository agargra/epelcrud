import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-mysql-detail',
  templateUrl: './mysql-detail.component.html',
  styleUrls: ['./mysql-detail.component.css']
})
export class MysqlDetailComponent implements OnInit {

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
    this.crudService.GetMysqltest(this.getId).subscribe(res => {
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
    this.crudService.updateMysqltest(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('mysqltest updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/mysql-list'))
      }, (err) => {
        console.log(err);
    });
  }
}
