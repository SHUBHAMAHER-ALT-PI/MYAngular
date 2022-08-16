import { Component, OnInit } from '@angular/core';
import { MainDataService } from 'src/app/service/main-data.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  template=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQ6LjrIfTwX3Zd2KGrh8dRTYtHLz_Z_2h_janf0EL&s",
  "https://img.freepik.com/free-vector/abstract-blue-geometric-shapes-background_1035-17545.jpg?w=2000",
  "https://cdn1.vectorstock.com/i/1000x1000/56/65/red-blue-template-background-vector-14215665.jpg",
  "https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000",
  "https://images.all-free-download.com/images/graphiclarge/abstract_background_template_for_style_design_267606.jpg",
  "https://i.pinimg.com/736x/b5/0d/98/b50d982effb76e0d386e183c2b31e1ea.jpg",

]

  constructor(private data:MainDataService ) { }

  ngOnInit(): void {
  }
  SetCurrnt(string:string){
    this.data.url=string;

  }

}
