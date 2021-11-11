import { UserService } from './../services/user.service';
import { IUser } from './../interfaces/iuser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  user: IUser = {

    id: 0,
    ragionesociale: '',
    partitaiva: '',
    tipocliente: '',
    email: '',
    pec: '',
    telefono: '',
    nomeContatto: '',
    cognomeContatto: '',
    telefonoContatto: '',
    emailContatto: '',
    indirizzoSedeOperativa: {
      id: 0,
      via: '',
      civico: '',
      cap: '',
      localita: '',
      comune: {
        id: 0,
        nome: '',
        provincia: {
          id: 0,
          nome: '',
          sigla: ''
        }
      }
    },
    indirizzoSedeLegale: {
      id: 0,
      via: '',
      civico: '',
      cap: '',
      localita: '',
      comune: {
        id: 0,
        nome: '',
        provincia: {
          id: 0,
          nome: '',
          sigla: ''
        }
      }
    },
    dataInserimento: '',
    dataUltimoContatto: '',
    fatturatoAnnuale: 0,

  }

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.userService.getUser(params.id).subscribe(response => this.user = response)
      }
    })
  }

  saveUser() {
    if (!this.user.id) {
      console.log('Create User');
      this.userService.createUser(this.user).subscribe(response => console.log(response));
    } else {
      console.log('Update User');
      this.userService.updateUser(this.user).subscribe(response => console.log(response));
    }
    this.router.navigate(['users']);
  }

}

