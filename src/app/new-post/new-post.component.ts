import { Component, OnInit } from '@angular/core';
import {Post} from "../post";
import {PostServiceService} from "../post-service.service";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  p: Post ;

  constructor( private serviceP : PostServiceService) { }

  ngOnInit() {
  }

  createNewPost(data){
    this.p = new Post(data.titl,data.contennt,0,Date());
    this.serviceP.ajouterPost(this.serviceP.posts, this.p );
    console.log(data);
  }

}
