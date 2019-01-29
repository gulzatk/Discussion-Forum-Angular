import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MyServices } from '../services/my-service';
import { Category } from '../models/category.model';
import { Post } from '../models/post.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [MyServices]

})
export class WelcomeComponent implements OnInit {

  allPosts: Post[] = [];

  constructor(private myServices: MyServices, private route: ActivatedRoute, private location: Location, private router: Router) { }

  getDetails(post) {
    this.router.navigate(['sports/post-details', post.id])
  }
  
  ngOnInit() {
    this.allPosts = this.myServices.listOfPosts();
  }

}
