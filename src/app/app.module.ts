import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from './app.component';

import { ManageBookingComponent } from './manage-booking/manage-booking.component';
import { RouterModule , Router, Routes } from "@angular/router";
import { WishListComponent } from './wish-list/wish-list.component';
import { HomeBookingComponent } from './home-booking/home-booking.component';
import { ListHotelComponent } from './list-hotel/list-hotel.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { ColorDirective } from './color.directive';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { ReactiveFormsModule } from "@angular/forms";

//http
// import { HttpClientModule } from "@angular/common/http";

const appRoutes: Routes = [
  { path: '', redirectTo:"listhotel", pathMatch:"full" },
  { path: 'wishlist', component: WishListComponent },
  { path: 'manage', component: ManageBookingComponent },
  { path: 'homebooking', component: HomeBookingComponent },
  { path: 'bookingdetail', component: BookingDetailComponent },
  { path: 'listhotel', component: ListHotelComponent },
  { path: 'hoteldetail/:name', component: HotelDetailComponent },
  { path: 'about', loadChildren : "src/about/about.module#AboutModule" }, //ตามด้วย # class of module
 
];

@NgModule({
  declarations: [
    AppComponent,
    ManageBookingComponent,
    WishListComponent,
    HomeBookingComponent,
    ListHotelComponent,
    HotelDetailComponent,
    ColorDirective,
    BookingDetailComponent,
    // HttpClientModule
  ],
  imports: [
    NgbModule,
    ReactiveFormsModule,
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
