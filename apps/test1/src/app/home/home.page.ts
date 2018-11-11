import { Component } from '@angular/core';
import { NavController, Nav } from '@ionic/angular';
import { BlogPage } from '../blog/blog.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public navController: NavController, public nav: Nav){

  }

  goToBlog(){
    this.nav.push(BlogPage);
  }

}
