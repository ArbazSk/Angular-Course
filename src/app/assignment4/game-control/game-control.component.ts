import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() increment = new EventEmitter<Number>();
  incrementInterval: any;
  incrementVal = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementNumber(){
    this.incrementPeriodically();
  }

  stopIncrement(){
    this.stopInterval();
  }

  private incrementPeriodically(){
    console.log("Interval Stared");
    this.incrementInterval = setInterval(() => {      
      this.increment.emit(++this.incrementVal)
    },1000);
  }

  private stopInterval(){
    clearInterval(this.incrementInterval);
    console.log("Interval Cleared");
  }
}
