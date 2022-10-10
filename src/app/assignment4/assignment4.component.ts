import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment4',
  templateUrl: './assignment4.component.html',
  styleUrls: ['./assignment4.component.css']
})
export class Assignment4Component implements OnInit {
  incrementValue: number;
  oddArray: number[] = [];
  evenArray: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  incrementValueEvent(incrementedValue: number){
    this.incrementValue = incrementedValue;
    if(this.incrementValue % 2 !== 0) this.oddArray.push(this.incrementValue);
    else this.evenArray.push(this.incrementValue);
    console.log(this.incrementValue);
  }

}
