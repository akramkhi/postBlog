import { Injectable } from '@angular/core';
import {Post} from './post';


@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  posts: Post[] = [new Post('Poste one ', ' Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ ', '4' , Date()),
    new Post('Poste two', ' Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ ', '-2' , Date()) ,
    new Post('Poste three', ' Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ ', '0' , Date())
  ];

  supprimerPost(listPost : Post[], p : Post) : Post[] {
    listPost.splice(listPost.indexOf(p),1);

    return listPost;
  }

  ajouterPost(listPost : Post[], p : Post) : Post[]{

      listPost.push(p);
    return listPost;
  }

  constructor() { }
}
