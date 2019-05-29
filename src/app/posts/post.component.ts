import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // initializing posts array which holds all the posts
  posts: any = [];

  constructor(public postService: PostService) {}

  // Display all data from API
  ngOnInit() {
    this.postService.getPost()
      .subscribe(data => {
        // console.log(data);
        this.posts = data;
      });
  }

  // saving the data getting from form
  submitForm(Form: NgForm) {
    // if form is invalid, simply return
    if (Form.invalid) {
      return;
    }
    // creting form data
    const formData = {
      title: Form.value.title,
      body: Form.value.body
    };
    // console.log(formData);
    this.postService.savePost(formData)
      .subscribe(data => {
        // console.log(data);
        this.posts.splice(0, 0, formData);
      });
    // reset the form after saving the form data
    Form.resetForm();
  }

  // delete a post method
  onDelete(post) {
    this.postService.deletePost(post.id)
      .subscribe(data => {
        // console.log(data);
        const postI = this.posts.indexOf(post);
        // console.log(postI);
        this.posts.splice(postI, 1);
      });
  }

}
