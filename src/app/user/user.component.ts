import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users={};
  constructor(private ds: DataService) { 

  }
  ngOnInit()
  {
    this.ds.getUsers().subscribe(d => {
      this.users = d;
      console.log();
    })
  }
}
