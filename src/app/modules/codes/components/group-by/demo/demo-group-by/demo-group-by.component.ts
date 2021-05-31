import { Component, OnInit } from '@angular/core';

class User {
  name!: string;
  age!: number;
}

@Component({
  selector: 'app-demo-group-by',
  templateUrl: './demo-group-by.component.html',
  styleUrls: ['./demo-group-by.component.scss']
})
export class DemoGroupByComponent implements OnInit {

  public users: User[] = [
    {name: 'Julien', age: 26},
    {name: 'Chloe', age: 1},
    {name: 'Raphael', age: 1},
    {name: 'Antoine', age: 50},
    {name: 'Brahim', age: 26},
    {name: 'Gwen', age: 26}
  ];

  defaultGrouping: string = "age";
  groupingProvider: string| ((user: User) => string[]) = this.defaultGrouping;

  constructor() { }

  ngOnInit(): void {
  }

  catNameGrouping(user: User): string[]{
    return ["julien","chloe"].includes(user.name.toLowerCase()) ? ["Cat"]: ["Human"];
  }



}
