import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Parent1Component } from './parent1/parent1.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
