import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrl: './user-view.component.css'
})
export class UserViewComponent implements OnInit {

  myUser!: User | any;  // tb lo hacemos de tipo any para que no de error

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersServices: UsersService
  ) { }

  ngOnInit(): void {
    // aqui capturo la ruta con el id del usuario
    // usamos un observable para capturar el id del usuario

    this.activatedRoute.params.subscribe(async (params: any) => {
      // console.log(params.userlogin);
      let login = params.userlogin; //obtenemos el user login

      this.myUser = await this.usersServices.getUserByLogin(login);
      // console.log(response);
    });
} 

}

