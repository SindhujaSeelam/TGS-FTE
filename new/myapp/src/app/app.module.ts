import { Component,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MainpageComponent } from './expenses/mainpage/mainpage.component';
import{MatStepperModule} from '@angular/material/stepper';
import { expenseserviceService } from './Services/expenseservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatButtonModule} from '@angular/material/button';
import { UserhomeComponent } from './expenses/userhome/userhome.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    MainpageComponent,
    UserhomeComponent,
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
  
  ],
  providers: [expenseserviceService,MatStepperModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
