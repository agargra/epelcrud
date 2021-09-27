import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MongoAddComponent } from './components/mongo-add/mongo-add.component';
import { MongoDetailComponent } from './components/mongo-detail/mongo-detail.component';
import { MongoListComponent } from './components/mongo-list/mongo-list.component';
import { MysqlAddComponent } from './components/mysql-add/mysql-add.component';
import { MysqlDetailComponent } from './components/mysql-detail/mysql-detail.component';
import { MysqlListComponent } from './components/mysql-list/mysql-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MongoAddComponent,
    MongoDetailComponent,
    MongoListComponent,
    MysqlAddComponent,
    MysqlDetailComponent,
    MysqlListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule		
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
