import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators} from '@angular/forms'

import { DataService } from '../data.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  user:any = {};
  form: any =FormGroup;
  

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private dataService: DataService) { }



  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3)]),
      lastName:new FormControl('', Validators.required),
      phone:new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  

  get firstName(){
    return this.form.get('firstName');
  }
  
  get lastName()
  {
    return this.form.get('lastName');
  }
  get phone()
  {
    return this.form.get('phone');
  }
  get email()
  {
    return this.form.get('email');
  }
  
  

  save(user: any) {
    this.dataService.createUser(user);
    this.router.navigate(['/user-view']);
    alert("You  have succesfully added a user");
  }



}
