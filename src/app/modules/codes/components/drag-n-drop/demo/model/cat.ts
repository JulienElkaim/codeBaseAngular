import {DraggableType} from "../../src/model/draggable-type";

export class Cat implements DraggableType<Cat>{
  name!: string;
  age!: number;
  meow?: string = "Meoooow...";

  getDraggableValue(): string{
    return JSON.stringify(this);
  }
}
