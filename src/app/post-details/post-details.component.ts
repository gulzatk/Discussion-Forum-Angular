import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MyServices } from '../services/my-service';
import { Post } from '../models/post.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Details } from '../models/details.model';



@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  providers: [MyServices]
})
export class PostDetailsComponent implements OnInit {
  postId: number = null;
  post: Post = null;
  detail: Details = null;

  constructor(private myServices: MyServices, private route: ActivatedRoute, private location: Location) { }

  addComment(comment) {
    this.detail.comments.push(comment);
    
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.postId = parseInt(urlParameters['id']);
    });

    this.post = this.myServices.getPostById(this.postId);

    this.detail = this.myServices.getDetailsById(this.postId);


  }

}
