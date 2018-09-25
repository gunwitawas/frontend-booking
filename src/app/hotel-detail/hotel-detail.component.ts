import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HotelService } from '../hotel.service';
import { Hotel } from "src/app/hotel";
import { map,filter } from 'rxjs/operators';
import { WishListService } from '../wish-list.service';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {

  hotel : Hotel;
  constructor(private activetedRoute: ActivatedRoute,
    private hotelService:HotelService,
    private wishListService:WishListService) {
    activetedRoute.paramMap.pipe(
      filter( param => param.has("name") ),
      map( param => param.get("name"))
    ).subscribe({
      next : (name) =>{
        this.hotel = this.getHotel(name)
      },
      error : (err) =>{  },
      complete: () =>{   }
    })
  } 
  ngOnInit() {
  }

  getHotel(name : string): Hotel{
    return this.hotelService.hotels.find(
      (hotel) => {
        return hotel.name == name
      }
    )
  }

  onStarClick (hotel1){
   
    this.wishListService.wishList.add(hotel1);
    console.dir(this.wishListService.wishList);
  }
}
