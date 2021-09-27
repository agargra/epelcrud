import { Component, OnInit } from '@angular/core';
import { CrudService } from './../../service/crud.service';

@Component({
  selector: 'app-mongo-list',
  templateUrl: './mongo-list.component.html',
  styleUrls: ['./mongo-list.component.css']
})
export class MongoListComponent implements OnInit {

  Mongotests:any = [];
	
  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetMongotests().subscribe(res => {
      console.log(res)
      this.Mongotests =res;
    });   		
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deleteMongotest(id).subscribe((res) => {
        this.Mongotests.splice(i, 1);
      })
    }
  }

}
