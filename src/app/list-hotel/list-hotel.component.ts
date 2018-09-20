import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent implements OnInit {

  @Input() hotel: Hotel;
  @Output() star = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
 onStarClick (){
   this.star.emit();
 }

}
