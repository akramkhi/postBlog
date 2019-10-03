import { Component } from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [new Post('Poste one ', ' Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ ', '4' , Date()),
    new Post('Poste two', ' Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ ', '-2' , Date()) ,
    new Post('Poste three', ' Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ ', '0' , Date())
  ];

}
