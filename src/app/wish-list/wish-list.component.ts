import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../hotel';
import { WishListService } from '../wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {

  @Input() wishList: Hotel[];

  constructor(
    private wishListService: WishListService
  ) { }

  ngOnInit() {
  }
  removeList (hotel1 : Hotel){
   
    this.wishListService.wishList.delete(hotel1);
    // this.wishListService.wishList.add(this.hotel2);
    console.dir(this.wishListService.wishList);
  }

  change(){
    alert ('hello');
  }
}
