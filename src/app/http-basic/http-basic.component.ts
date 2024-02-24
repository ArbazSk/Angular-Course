import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-http-basic',
  templateUrl: './http-basic.component.html',
  styleUrls: ['./http-basic.component.css']
})
export class HttpBasicComponent {
  loadedPosts = [];
  readonly API_URL = "https://angular-practice-22862-default-rtdb.firebaseio.com";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.http.post<{ name: string }>(`${this.API_URL}/posts.json`, postData)
      .subscribe(responseData => {
        console.log("data :: ", responseData)
      })
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http.get<{ [key: string]: Post }>(`${this.API_URL}/posts.json`)
      .pipe(map(posts => {
        let postsArray: Post[] = [];
        for (const key in posts) {
          if (posts.hasOwnProperty("key")) {
            postsArray.push({ ...posts[key], id: key })
          }
        }
        return postsArray
      }))
      .subscribe(posts => {
        console.log("data :: ", posts)
      });
  }
}
