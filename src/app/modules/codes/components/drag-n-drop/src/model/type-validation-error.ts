export class TypeValidationError extends Error{
  constructor(message) {
    super(message);
    this.name = "TypeValidationError";
  }
}
