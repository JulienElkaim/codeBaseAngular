import { Component, OnInit } from '@angular/core';
import {Cat} from "../../model/cat";
import {DropError} from "../../../src/droppable.directive";
import {Dog} from "../../model/dog";

@Component({
  selector: 'app-demo-dnd-dogs',
  templateUrl: './demo-dnd-dogs.component.html',
  styleUrls: ['./demo-dnd-dogs.component.scss']
})
export class DemoDndDogsComponent implements OnInit {

  public dog1: Dog = new Dog("Rex", 3, "brown", "wuf wuf!");
  public dog2: Dog = new Dog("Krakotte", 10, "black");
  public droppedDog?: Dog;
  public dropErrorMessage?: string;
  public get dogType(): typeof Dog{
    return Dog;
  }

  constructor() { }

  ngOnInit(): void {
  }

  greet(dog: Dog): string {
    return `${dog.name} is a ${dog.age}yo  ${dog.color} dog -> ${dog.bark}`;
  }

  dataReceived(dog: Dog) {
    this.dropErrorMessage = undefined;
    this.droppedDog = dog;
  }

  onDropError($event: DropError) {
    this.droppedDog = undefined;
    this.dropErrorMessage = JSON.stringify($event.value || {}) || "Error on DropEvent";
  }
}
