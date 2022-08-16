import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainDataService {
  allList: Array<any> = [];
  currnt:any ={
    url:"",
    heading:"",
    offer:0,
    
  };
  url:any=""
  offer:any = 0;
  heading:any = "";

  constructor() { }
}
