import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor() { }
  
  hotels = [
    {
      name : "โรงแรม",
      description : "อยู่ในบริเวณที่ดีสำหรับการทานอาหารนอกที่พักที่พักนี้อยู่ห่างจากชายหาด/ริมน้ำโดยเดิน 5 นาที",
      imageUrl : "https://q-ak.bstatic.com/images/hotel/max1024x768/114/114877736.jpg"
    },{
      name : "โรงแรม2",
      description : " อยู่ในบริเวณที่ดีเยี่ยมสำหรับการทานอาหารนอกที่พักที่พักนี้อยู่ห่างจากชายหาด/ริมน้ำโดยเดิน 4 นาที",
      imageUrl : "https://q-ak.bstatic.com/images/hotel/max1024x768/698/69837477.jpg"
    },{
      name : "โรงแรม3",
      description : " อยู่ในบริเวณที่ดีสำหรับการทานอาหารนอกที่พักที่พักนี้อยู่ห่างจากชายหาด/ริมน้ำโดยเดิน 11 นาที",
      imageUrl : "https://q-ak.bstatic.com/images/hotel/max1024x768/133/133467452.jpg"
    }

  ]

  
}
