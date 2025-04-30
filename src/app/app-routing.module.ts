import { NgModule } from "@angular/core";  
import { RouterModule, Routes } from "@angular/router";
import { InitialComponent } from "./screen/initial/initial.component";
import { ItemdetailsComponent } from "./screen/itemdetails/itemdetails.component";
import { CartComponent } from "./screen/cart/cart.component";

export const routes: Routes = [
    { path: '', component: InitialComponent },
    { path: 'products/:id', component: ItemdetailsComponent } ,
    { path: 'cart', component: CartComponent }
  ];