import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputDataComponent } from './Component/input-data/input-data.component';
import { PostComponent } from './Component/post/post.component';
import { TemplateComponent } from './Component/template/template.component';

const routes: Routes = [
  { path: 'MYAngular/alllist', component:PostComponent  },
  { path: 'MYAngular/', component:TemplateComponent  },
  { path: 'MYAngular/input', component:InputDataComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
