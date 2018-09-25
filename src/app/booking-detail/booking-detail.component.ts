import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
  
  nameControl = new FormControl('Jonh', Validators.required);

  bookingGroupControl = new FormGroup({
    nameControl: this.nameControl,
    emailControl: new FormControl('Jonh_@email.com', [Validators.email , Validators.required]),
    telControl: new FormControl('0801231231', [
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.required
    ]),

  });

  // constructor(private http: HttpClient) { }
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

    summit(){
      
      this.http.post("url", this.bookingGroupControl.value).subscribe({
        next: (response) =>{},
        error: (err) => {},
        complete: () => {}
      });
    }
}
// activetedRoute.paramMap.pipe(
//   filter( param => param.has("name") ),
//   map( param => param.get("name"))
// ).subscribe({
//   next : (name) =>{
//     this.hotel = this.getHotel(name)
//   },
//   error : (err) =>{  },
//   complete: () =>{   }
// })
// } 
