import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post/post';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user/user';
import  { AddContactService } from '../../services/add-contact.service'


@Component({
  selector: 'app-service-shop',
  templateUrl: './service-shop.component.html',
  styleUrls: ['./service-shop.component.css']
})
export class ServiceShopComponent implements OnInit {

  @Input() service: Post = new Post();
  userForm: FormGroup;
  userPost: User;

  constructor(public formBuilder: FormBuilder, private contactService: AddContactService) { }

  ngOnInit(): void {
    this.seeProfile();
  }

  
  seeProfile(){
    this.userForm = this.formBuilder.group({
      id_cuenta: this.service.cuenta
    })
    this.contactService.getUnitUser(this.userForm.value).subscribe(
      response => {
        this.userPost = response;
      }
    )
  }


}
