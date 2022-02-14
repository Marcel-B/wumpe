import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeuComponent } from './neu/neu.component';
import {UebersichtComponent} from "./uebersicht/uebersicht.component";

const routes: Routes = [
    {path: 'uebersicht', component: UebersichtComponent},
    {path: 'neu', component: NeuComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
