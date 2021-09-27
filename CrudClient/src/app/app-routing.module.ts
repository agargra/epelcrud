import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MongoAddComponent } from './components/mongo-add/mongo-add.component';
import { MongoDetailComponent } from './components/mongo-detail/mongo-detail.component';
import { MongoListComponent } from './components/mongo-list/mongo-list.component';
import { MysqlAddComponent } from './components/mysql-add/mysql-add.component';
import { MysqlDetailComponent } from './components/mysql-detail/mysql-detail.component';
import { MysqlListComponent } from './components/mysql-list/mysql-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'mongo-list' },
  { path: 'mongo-list', component: MongoListComponent },
  { path: 'mongo-add', component: MongoAddComponent },
  { path: 'mongo-edit/:id', component: MongoDetailComponent },
  { path: 'mysql-list', component: MysqlListComponent },
  { path: 'mysql-add', component: MysqlAddComponent },
  { path: 'mysql-edit/:id', component: MysqlDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
