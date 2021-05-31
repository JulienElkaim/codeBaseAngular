import {Component, OnInit} from '@angular/core';

class User {
  name!: string;
  age!: string;
}

@Component({
  selector: 'app-demo-order-by',
  templateUrl: './demo-order-by.component.html',
  styleUrls: ['./demo-order-by.component.scss']
})
export class DemoOrderByComponent implements OnInit {

  public users: User[] = [
    {name: 'Julien', age: "26"},
    {name: 'Julian', age: "30"},
    {name: 'Chloe', age: "25"},
    {name: 'Antoine', age: "50"},
    {name: 'Brahim', age: "10"},
    {name: 'Gwen', age: "25"}
  ];

  propertyName: 'name' | 'age' = 'name';

  constructor() {
  }

  ngOnInit(): void {
  }

}
