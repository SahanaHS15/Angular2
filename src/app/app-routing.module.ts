 import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
// import { HeadphonesComponent } from './products/headphones/headphones.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { ProductsComponent } from './products/products.component';
// import { ServicesComponent } from './services/services.component';
// import { UnknownComponent } from './unknown/unknown.component';

const routes: Routes = [
  {path:'',redirectTo:'About',pathMatch:'full'},
  {path:'Home',component:HomeComponent},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  // {path:'Services',component:ServicesComponent},
  // {path:'products',component:ProductsComponent},
  // {path:'products',children:[
  //   {path:'',component:ProductsComponent},
  //   {path:'mobile',component:MobileComponent}
  // ]}
  // {path:'**',component:UnknownComponent}
  {path:'products',component:ProductsComponent,children:[
       {path:'mobile',component:MobileComponent},
       {path:'Laptop',component:LaptopComponent},
      //  {path:'Headphones',component:HeadphonesComponent}
     ]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}



