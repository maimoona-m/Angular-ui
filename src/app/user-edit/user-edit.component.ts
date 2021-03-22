import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user:any = {};
  id:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.dataService.getUserById(this.id)
        .subscribe(p => {
          this.user = p;
        });     
  }

  ngOnInit(): void {
  }

  update(course: any) {

    this.dataService.updateUser(this.id, this.user);
    this.router.navigate(['/user-view']);
    alert("You have succesdfully updated !");
    
  }

}
