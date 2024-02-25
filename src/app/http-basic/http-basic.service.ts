import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class PostService {
    readonly API_URL = "https://angular-practice-22862-default-rtdb.firebaseio.com";

    constructor(private http: HttpClient) { }

    createAndStorePost(title: string, content: string) {
        let postData: Post = {
            title: title,
            content: content
        }
        return this.http.post<{ name: string }>(`${this.API_URL}/posts.json`, postData);
    }

    fetchPosts() {
        return this.http.get<{ [key: string]: Post }>(`${this.API_URL}/posts.json`)
            .pipe(map(posts => {
                let postsArray: Post[] = [];
                for (const key in posts) {
                    if (posts.hasOwnProperty(key)) {
                        postsArray.push({ ...posts[key], id: key })
                    }
                }
                return postsArray
            }));
    }

    deleteAllPosts() {
        return this.http.delete(`${this.API_URL}/posts.json`);
    }
}