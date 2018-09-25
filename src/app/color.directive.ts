import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {

  @Input() color : string;

  constructor(private el : ElementRef) {

    el.nativeElement.style.backgroundColor = "red"
    // el.nativeElement.style = "background-color : red" //แบบนี้ก็ได้
  
  }

  ngOnInit(){
    this.el.nativeElement.style.backgroundColor = this.color
  }

}
