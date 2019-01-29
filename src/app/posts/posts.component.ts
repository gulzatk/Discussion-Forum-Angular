import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Post } from '../models/post.model';
import { MyServices } from '../services/my-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  childPostList: Post[];

  constructor(private myServices: MyServices, private router: Router) { }

  ngOnInit() {
    this.childPostList = this.myServices.listOfPosts();

  }

  getDetails(post: Post){
    this.router.navigate([''])
  }

}
