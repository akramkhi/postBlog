import { Component, OnInit , Input } from '@angular/core';

import {Post} from '../post';
import {PostServiceService} from "../post-service.service";



@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  clr(p): String {
    if (p.loveIts > 0) {
      return '#82ecb2';
    }else if (p.loveIts < 0) {

      return '#f37979';
    }
  }
  addPost(p) {
    console.log(p.loveIts);
    p.loveIts++;
    console.log(p.loveIts);
  }
  sousPost(p) {
    p.loveIts--;
  }

  deletePost(p){
    console.log(p);
    this.serviceP.supprimerPost(this.posts,p);
  }



  constructor(private serviceP : PostServiceService) { }
  posts = this.serviceP.posts;
  ngOnInit() {
  }





}
