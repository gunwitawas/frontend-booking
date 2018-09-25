import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from '../hotel';
import { WishListService } from '../wish-list.service';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent implements OnInit {
 
  // @Input() hotel: Hotel;
  @Output() star = new EventEmitter();

  constructor(
    private wishListService : WishListService,
    private hotelService:HotelService
    ) {}
  ngOnInit() {
  }
  onStarClick (hotel1){
   
    this.wishListService.wishList.add(hotel1);
    console.dir(this.wishListService.wishList);
  }
  
 


}
