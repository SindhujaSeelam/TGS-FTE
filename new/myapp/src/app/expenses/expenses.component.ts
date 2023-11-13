import { Component, OnInit } from '@angular/core';
import { expenseserviceService } from '../Services/expenseservice.service';
import { users } from './data.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
 
 
  login=true
  exdata:any=[]
  userdata:any=[]
  invalid=false
  takedetailsvar=false
  main=false
  constructor(private expense:expenseserviceService) 
  
  { }

  ngOnInit(): void {
 this.data()
 this.usersdata()
  }

  onchecklogin(logindata:{email:string,password:string})
  {
    
  
    for(const i in this.userdata){
      if(this.userdata[i].email==logindata.email && this.userdata[i].password==logindata.password)
      {
        console.log("checking 1...")

        this.login=false
        this.main=true
        console.log(this.userdata[i].id)
        this.expense.uid=this.userdata[i].id

        
       
      }
      else{

        console.log("checking...")
        this.invalid=true

      }
    }
  
  }


  data(){
    this.expense.getdata()
    .subscribe((data)=>{
      console.log(data)
      this.exdata=data
    })
  }

  usersdata()
  {
    
    this.expense.getusersdata()
    .subscribe((data)=>{
      console.log(data)
      this.userdata=data
    })
  }

  registeruser(data:users){
    this.expense.registermethod(data)
    .subscribe(()=>{
      this.usersdata()
    })
    this.login=true
    this.takedetailsvar=false
    this.invalid=false
   
    

  }

  onregister()
  {
    this.takedetailsvar=true
    this.login=false
    
  }

}

