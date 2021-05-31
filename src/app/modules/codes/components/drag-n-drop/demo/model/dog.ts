import {DraggableType} from "../../src/model/draggable-type";

export class Dog implements DraggableType{
  name: string;
  age: number;
  color: string;
  bark: string;

  constructor(name: string, age: number, color: string, bark?: string) {
    this.name =  name;
    this.age = age;
    this.color = color;
    this.bark = bark || "Wouaf!";
  }

  getDraggableValue(): string{
    return JSON.stringify({
      name: this.name,
      age: this.age,
      bark: this.bark
    });
  }

  public static defaultValidator(object: any): object is Dog{
    return object.hasOwnProperty('bark');
  }

  public static of(object: any): Dog{
    return  new Dog(
      object?.name,
      object?.age,
      object?.color || "'unknown color'",
      object?.bark);
  }
}
