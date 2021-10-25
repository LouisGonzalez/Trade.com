import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { SessionUserService } from 'src/app/services/home-service/session-user.service';
import {HomeUserService} from '../../services/home-service/home-user.service';

@Component({
  selector: 'app-prof-users',
  templateUrl: './prof-users.component.html',
  styleUrls: ['./prof-users.component.css']
})
export class ProfUsersComponent implements OnInit {

  public USER: User = new User();

  isCompany: boolean = false;

  constructor(private rutaActiva: ActivatedRoute,private _router:Router, public homeUserService: HomeUserService, public sessionUserService: SessionUserService) { }

  ngOnInit(): void {
    console.log('param id_cuenta',this.rutaActiva.snapshot.params.id_cuenta);
  }

}
