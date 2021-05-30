export class Dog{
  name!: string;
  age!: number;
  color!: string;
  bark?: string = "Wouaf!";

  getDraggableValue(): string{
    return JSON.stringify({
      name: this.name,
      age: this.age,
      bark: this.bark
    });
  }
}
