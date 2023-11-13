import { Component } from '@angular/core';
import { expenseserviceService } from 'src/app/Services/expenseservice.service';
import{map} from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Chart, registerables } from 'chart.js';
import { expense } from '../data.model';
Chart.register(...registerables);
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css'],

})

export class UserhomeComponent {

  edit=false
  home=true
  x=true
  editdata
  checkexpense =new MatTableDataSource
  graphdata=[]
  graphmoneydata=[]
  graphdesdata=[]

  columns=['sno','type','money','date','actions']
  
  ngOnInit():void{
    

    this.datamethod()
    

  }
  constructor(private service:expenseserviceService){}

  datamethod(){
    
    this.service.getdata()
        .subscribe((data)=>{
      
      for(const i in data)
      {
        if(data[i].uid==this.service.uid)
        { 
          console.log(data[i]);
      this.checkexpense.data.push(data[i])
      this.graphdata.push(data[i])
    }
      }
      this.checkexpense._updateChangeSubscription()
      this.graphmethod()
      
    })
  

  }


  activate()
  {
    this.home=false
    this.edit=false

  }

  back(){
    this.home=true
    this.checkexpense.data=[]
    this.datamethod()
  }

  editactivate(k:any){
    this.service.sno=k
    this.edit=true
    this.service.getdata()
    .subscribe((data)=>{
  
  for(const i in data)
  {
    if(data[i].sno==k)
    {
      this.editdata=data[i]
}
  }

})

}


onSubmit(string:any){
   this.home=true
  this.edit=false
  console.log(string)
  this.service.editdatamethod(string)
  .subscribe(()=>{
    this.checkexpense.data=[]
    this.datamethod()
  })
 //this.hellocheck()
  

}

hellocheck()
{
  this.checkexpense.data=[]
  this.datamethod()
}


graphmethod(){
  console.log("Chaitu")
  for (const i in this.graphdata){

    this.graphmoneydata.push(this.graphdata[i].money)
    this.graphdesdata.push(this.graphdata[i].type)
    console.log(this.graphmoneydata)
  }


  var myChart = new Chart("myChart", {
    type: 'pie',
    data: {
      labels: this.graphdesdata,
      datasets: [{
        label: '# of Votes',
        data: this.graphmoneydata,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: false,
     // display:true
    }
  });
}

delete(x:number){

  this.service.deletemethod(x)
  .subscribe(()=>{

    this.checkexpense.data=[]
    this.datamethod()
  })

}
}