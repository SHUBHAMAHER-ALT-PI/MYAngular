import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './Component/template/template.component';
import { InputDataComponent } from './Component/input-data/input-data.component';
import { PostComponent } from './Component/post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    InputDataComponent,
    PostComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
