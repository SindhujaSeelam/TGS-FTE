import { Component, OnInit } from '@angular/core';
import { expense } from '../data.model';
import { expenseserviceService } from 'src/app/Services/expenseservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  successtag=false
  expensedata:any=[]
  ngOnInit():void{

this.datamethod()

  }

  constructor(private service:expenseserviceService){}

  datamethod(){
    console.log("SIndhu")
    console.log(this.service.uid)
    this.service.getdata()
    .subscribe((data)=>{
      
      for(const i in data)
      {
        if(data[i].uid==this.service.uid)
        {
        console.log(data[i])
      this.expensedata.push(data[i])
      console.log(this.expensedata)
    }
      }
    })
  

  }


  showmethod()
  {
    console.log("data.........")
    console.log(this.expensedata)
  }

  passdata(expensedata:{type:string,money:number,date:string},form:NgForm){
    this.successtag=true
    console.log(expensedata)
    this.service.enterexpensesdata(expensedata.type,expensedata.money,expensedata.date)

  }
}
