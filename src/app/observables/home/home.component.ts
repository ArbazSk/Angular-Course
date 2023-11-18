import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscribable, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeObsComponents implements OnInit, OnDestroy {
  firstSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstSubscription = interval(1000).subscribe(count => console.log(count));
    const customIntervalObservable = new Observable<number>(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000)
    });

    this.firstSubscription = customIntervalObservable.subscribe(count => console.log(count));
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }

}
