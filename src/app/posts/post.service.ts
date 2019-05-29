import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class PostService {
  constructor(private http: HttpClient) {}

  // getting all the posts from an api
  getPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  // save post method
  savePost(formData) {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', formData);
  }

  // delete post method
  deletePost(postid) {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/' + postid);
  }

}
