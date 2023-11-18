import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscribable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeObsComponents implements OnInit, OnDestroy {
  firstSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    this.firstSubscription = interval(1000).subscribe(count => console.log(count));
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }

}
