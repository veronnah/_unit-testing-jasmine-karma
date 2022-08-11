import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user: {
    name: string,
  };
  public isLoggedIn: boolean;
  public data: unknown;

  constructor(
    private userService: UserService,
    private dataService: DataService,
  ) {
  }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.dataService.getDetails().then(data => this.data = data);
  }

}
