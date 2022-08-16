import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl } from '@angular/forms';
import { MainDataService } from 'src/app/service/main-data.service';

@Component({
  selector: 'app-input-data',
  templateUrl: './input-data.component.html',
  styleUrls: ['./input-data.component.css']
})
export class InputDataComponent implements OnInit {
  img: any="";
  name: any ="";
  of:any = "";
  show: boolean = false;
  form: boolean=true

  constructor(private data:MainDataService) { }

  ngOnInit(): void {
  }
  CurrentdataHeading= new  FormGroup({
    heading: new FormControl(""),
    offer: new FormControl("")

  });
  setData(){
    this.img=this.data.url,
    this.name=this.CurrentdataHeading.value.heading,
    this.of=this.CurrentdataHeading.value.offer;
    console.log(this.CurrentdataHeading);
    this.data.currnt={
      url:this.data.url,
      heading :this.CurrentdataHeading.value.heading,
      offer: this.CurrentdataHeading.value.offer,
    }
    // this.data.heading = this.CurrentdataHeading.value.heading;
    // this.data.offer = this.CurrentdataHeading.value.offer||;
    this.data.allList.push({
      url:this.data.url,
      heading:this.CurrentdataHeading.value.heading,
      offer: this.CurrentdataHeading.value.offer,
    })
    this.show=true;
    this.form=false;
  }

}
