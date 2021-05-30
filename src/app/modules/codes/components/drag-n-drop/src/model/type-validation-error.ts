export class TypeValidationError extends Error{
  constructor(message: string) {
    super(message);
    this.name = "TypeValidationError";
  }
}
