import {DraggableType} from "../../src/model/draggable-type";

export class Cat implements DraggableType<Cat>{
  name: string;
  age: number;
  meow: string;

  constructor(name: string, age: number, meow?: string) {
    this.name =  name;
    this.age = age;
    this.meow = meow || "Meoooow...";
  }

  getDraggableValue(): string{
    return JSON.stringify(this);
  }

  public static defaultValidator(object: any): object is Cat{
    return object.hasOwnProperty('meow');
  }

  public static of(object: any): Cat{
    return  new Cat(object?.name, object?.age, object?.meow);
  }
}
