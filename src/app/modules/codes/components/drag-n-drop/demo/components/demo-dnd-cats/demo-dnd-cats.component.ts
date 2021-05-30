import { Component, OnInit } from '@angular/core';
import {Cat} from "../../model/cat";
import {DropError} from "../../../src/droppable.directive";

@Component({
  selector: 'app-demo-dnd-cats',
  templateUrl: './demo-dnd-cats.component.html',
  styleUrls: ['./demo-dnd-cats.component.scss']
})
export class DemoDndCatsComponent implements OnInit {

  public cat1: Cat = new Cat("Oscar", 3, "Miuuu !");
  public cat2: Cat = new Cat("Boule", 10);
  public droppedCat?: Cat;
  public dropErrorMessage?: string;
  public get catType(): typeof Cat{
    return Cat;
  }

  constructor() { }

  ngOnInit(): void {
  }

  greet(cat: Cat): string {
    return `${cat.name} is ${cat.age}yo cat, saying: ${cat.meow}`;
  }

  dataReceived(cat: Cat) {
    this.dropErrorMessage = undefined;
    this.droppedCat = cat;
  }

  onDropError($event: DropError) {
    this.droppedCat = undefined;
    this.dropErrorMessage = JSON.stringify($event.value || {}) || "Error on DropEvent";
  }
}
