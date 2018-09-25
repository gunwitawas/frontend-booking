import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([ //module ลูก ต้องใช้ forchild
      { path: "", component: AboutComponent }

  ])
  ],
  declarations: [AboutComponent]
})
export class AboutModule { }
