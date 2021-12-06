import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { UsersModule } from './users/users.module';
import { UserListComponent } from './user-list/user-list.component';
import { FormComponent } from './form/form.component';
import { HighlightDirective } from './highlight.directive';
import { NeedDataService } from './need-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { LaptopComponent } from './products/laptop/laptop.component';
// import { MobileComponent } from './mobile/mobile.component';
// import { LaptopComponent } from './laptop/laptop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserListComponent,
    FormComponent,
    FooterComponent,
    HighlightDirective,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    ProductsComponent,
    MobileComponent,
    LaptopComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


