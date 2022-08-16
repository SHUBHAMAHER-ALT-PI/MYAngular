import { Component, OnInit } from '@angular/core';
import { MainDataService } from 'src/app/service/main-data.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  Alldata: any;

  constructor(private data:MainDataService) { 
    this.Alldata= this.data.allList;
  }
  k=0;

  ngOnInit(): void {
  }
  delete(itm:any){
    for(let i=0;i<this.data.allList.length;i++){
      if(this.data.allList[i]==itm){
        this.k=i;
        this.data.allList.splice(i,1);}
        break;
    }

  }
  add(itm:any){
    for(let i=0;i<this.data.allList.length;i++){
      if(this.data.allList[i]==itm){
        this.k=i;
        break;
    }
  }
    this.data.allList.splice(this.k,1);
    this.data.url=itm.url;
    this.data.heading=itm.heading;
    this.data.offer=itm.offer;

  }
  

}
