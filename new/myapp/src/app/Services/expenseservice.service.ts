import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { users } from '../expenses/data.model';
@Injectable({
  providedIn: 'root'
})
export class expenseserviceService {

  dataurl='http://localhost:8080/data'
  usersurl='http://localhost:8080/usersdata'
  register='http://localhost:8080/register'
  adddata='http://localhost:8080/adddata'
  editdata='http://localhost:8080/editdata'
  delete='http://localhost:8080/delete/'
  uid=13
  sno

  constructor(private http:HttpClient) { }

  getdata(){
   return this.http.get(this.dataurl)
    
  }

  getusersdata(){
    return this.http.get(this.usersurl)
   
  }

  registermethod(body:users)
  {

   return this.http.post(this.register,body)
    
  }
  enterexpensesdata(dtype:string,dmoney:number,ddate:string){
    console.log(this.uid)

    const body={
      type:dtype,
      money:dmoney,
      date:ddate,
      uid:this.uid
    }
    this.http.post(this.adddata,body)
    .subscribe(()=>{
      console.log("Successfull")
    })

  }


  editdatamethod(body){

    return this.http.post(this.editdata,body)
    
  }

  deletemethod(id:number){

    return this.http.get(this.delete+id)
    

  }
}
