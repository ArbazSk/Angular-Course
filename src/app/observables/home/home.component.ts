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
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error("Count is greater then 3."));
        }
      }, 1000)
    });

    this.firstSubscription = customIntervalObservable.subscribe(count => console.log(count),
      error => {
        console.error(error);
        alert(error);
      },
      () => console.log("Complete."));
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }

}
