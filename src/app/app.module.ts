import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from './app.component';

import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { AboutComponent } from './about/about.component';
import { RouterModule , Router, Routes } from "@angular/router";
import { WishListComponent } from './wish-list/wish-list.component';
import { HomeBookingComponent } from './home-booking/home-booking.component';
import { ListHotelComponent } from './list-hotel/list-hotel.component';

const appRoutes: Routes = [
  { path: '', redirectTo:"homebooking", pathMatch:"full" },
  { path: 'wishlist', component: WishListComponent },
  { path: 'manage', component: ManageBookingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'homebooking', component: HomeBookingComponent },
  { path: 'listhotel', component: ListHotelComponent },
 
];

@NgModule({
  declarations: [
    AppComponent,
    ManageBookingComponent,
    AboutComponent,
    WishListComponent,
    HomeBookingComponent,
    ListHotelComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
