import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import {PostServiceService} from "./post-service.service";
import { NewPostComponent } from './new-post/new-post.component';
import {RouterModule, Routes} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";

const appRoutes: Routes = [
  {path:'newpost', component: NewPostComponent},
  {path:'showposts', component: PostListComponentComponent},
  {path:'', component: AppComponent},
  {path:'**', redirectTo: 'showposts'}

];


@NgModule({
  declarations: [
    AppComponent,
    PostListComponentComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FormsModule
  ],
  providers: [PostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
