import { Component } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './http-basic.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-http-basic',
  templateUrl: './http-basic.component.html',
  styleUrls: ['./http-basic.component.css']
})
export class HttpBasicComponent {
  loadedPosts = [];
  isFetching = false;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post, form: NgForm) {
    this.postService.createAndStorePost(postData.title, postData.content)
      .subscribe(responseData => {
        console.log("data :: ", responseData);
        form.reset();
        this.fetchPosts();
      });

  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.isFetching = true;
    this.postService.fetchPosts()
      .subscribe(posts => {
        this.loadedPosts = posts;
        this.isFetching = false;
      });
  }
}
