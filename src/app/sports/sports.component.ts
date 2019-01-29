import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MyServices } from '../services/my-service';
import { Category } from '../models/category.model';
import { Post } from '../models/post.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
  providers: [MyServices]
})
export class SportsComponent implements OnInit {
  postCategory: Category = this.myServices.sports;
  posts: Post[] = [];

  constructor(private myServices: MyServices, private route: ActivatedRoute, private location: Location, private router: Router) { }

  getDetails(post) {
    this.router.navigate(['sports/post-details', post.id])
  }

  ngOnInit() {
    this.posts = this.myServices.getPostsByCategory(this.postCategory);
    console.log(this.posts)
  }
}
