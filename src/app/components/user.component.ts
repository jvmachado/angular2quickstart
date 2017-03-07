import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [ PostsService ]
})
export class UserComponent  {
  name: string;
  email: string;
  address: Address;
  hobbies: string[];
  showHobbies: boolean;
  posts:Post[];

  constructor(private postsService: PostsService){
    this.name = 'João';
    this.email = 'joaovitoramachado@gmail.com';
    this.address = {
      street:'Dom Diogo',
      city:'Porto Alegre',
      state:'RS'
    }
    this.hobbies = ['Music','Movies','Sports'];
    this.showHobbies = false;
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby:string){
    this.hobbies.push(hobby);
  }

  deleteHobby(i:number){
    this.hobbies.splice(i,1);
  }
}

interface Post{
  id:number;
  title:string;
  body:string;
}

interface Address{
  street: string;
  city:string;
  state:string;
}
