import { Component } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service'; // Import UsersService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Corrected styleUrl to styleUrls
})
export class HomeComponent {

  arrUsers: User[] = [];

  constructor(private usersService: UsersService) {} // Corrected UsersService to usersService

  async getUsers($event: string): Promise <void> {
    try {
      let name = $event;
    //console.log('componente padre',$event);
    let response=await this.usersService.getUsersByName(name);
    // this.arrUsers = response.items.slice(1, 11);
        this.arrUsers = response.items;


    // slice para que muestre solo 10 usuarios
    console.log(this.arrUsers);
    } catch (error) {
      console.log(error);
    }
    
  }
}
