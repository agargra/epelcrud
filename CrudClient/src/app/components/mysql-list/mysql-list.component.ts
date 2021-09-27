import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-mysql-list',
  templateUrl: './mysql-list.component.html',
  styleUrls: ['./mysql-list.component.css']
})
export class MysqlListComponent implements OnInit {

  Mysqltests:any = [];
	
  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetMysqltests().subscribe(res => {
      console.log(res)
      this.Mysqltests =res;
    });   		
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteMysqltest(id).subscribe((res) => {
        this.Mysqltests.splice(i, 1);
      })
    }
  }

}
