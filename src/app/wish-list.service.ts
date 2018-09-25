import { Injectable } from '@angular/core';
import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  wishList: Set<Hotel> = new Set();
  constructor() { }
}
