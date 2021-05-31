import {Directive, Input, Output, EventEmitter, ElementRef, Renderer2, HostListener} from '@angular/core';
import {DraggableType} from "./model/draggable-type";
import {TypeValidationError} from "./model/type-validation-error";

export type DropError = { error: TypeValidationError, value: null | any | string }

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective<T extends DraggableType> {
  @Input() type?: new () => T; // Simple declaration for linter, could be dumped in final version.
  @Output() dropSuccess = new EventEmitter<T>();
  @Output() dropError = new EventEmitter<DropError>();

  @Input() validator!: (objectToValidate: any) => objectToValidate is T;
  @Input() transform!: (objectToValidate: any) => T;

  @Input() clazzOnHover: string = 'droppable-hover-default';
  @Input() clazzOnDropSuccess: string = 'droppable-success-default';
  @Input() clazzOnDropError: string = 'droppable-error-default';
  @Input() dragEnterCallBack!: (event: DragEvent) => void;
  @Input() dragLeaveCallBack!: (event: DragEvent) => void;

  @Output() dragEnter = new EventEmitter<DragEvent>();
  @Output() dragLeave = new EventEmitter<DragEvent>();

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }


  @HostListener('dragenter', ['$event'])
  onDragEnter(dragEvent: DragEvent) {
    this.addClasses([this.clazzOnHover]);
    this.removeClasses([this.clazzOnDropError, this.clazzOnDropSuccess]);

    if (this.dragEnterCallBack) {
      this.dragEnterCallBack(dragEvent);
    }
    this.dragEnter.emit(dragEvent);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(dragEvent: DragEvent) {
    this.removeClasses([this.clazzOnDropError, this.clazzOnDropSuccess, this.clazzOnHover]);

    if (this.dragLeaveCallBack) {
      this.dragLeaveCallBack(dragEvent);
    }
    this.dragLeave.emit(dragEvent);
  }

  @HostListener('drop', ['$event'])
  onDrop(dragEvent: DragEvent) {
    dragEvent.preventDefault();
    this.removeClasses([this.clazzOnDropError, this.clazzOnDropSuccess, this.clazzOnHover]);

    // @ts-ignore
    let draggedData: string = dragEvent.dataTransfer.getData("text/json");
    let objectDragged: any;

    try {
      objectDragged = JSON.parse(draggedData);
    } catch (e) {
      this.dropError.emit({
        error: new TypeValidationError("Value dragged is not a parsable Object."),
        value: draggedData
      });
      this.addClasses([this.clazzOnDropError]);
      this.removeClasses([this.clazzOnDropSuccess, this.clazzOnHover]);
      return;
    }

    if (this.validator && !this.validator(objectDragged)) {
      this.dropError.emit({
        error: new TypeValidationError("Value dragged did not pass the validation step."),
        value: objectDragged
      });
      this.addClasses([this.clazzOnDropError]);
      this.removeClasses([this.clazzOnDropSuccess, this.clazzOnHover]);
      return;

    } else {

      if(this.transform){
        this.dropSuccess.emit(this.transform(objectDragged));
      } else{
        this.dropSuccess.emit(objectDragged);
      }
      this.addClasses([this.clazzOnDropSuccess]);
      this.removeClasses([this.clazzOnDropError, this.clazzOnHover]);
    }
  }

  @HostListener("dragover", ["$event"])
  onDragOver(dragEvent: DragEvent){
    dragEvent.preventDefault();
  }

  private removeClasses(classes: string[]) {
    classes.forEach(clazz => {
      DroppableDirective.sanitizedClass(clazz).split(" ").forEach(subClazz => {
        this.renderer.removeClass(this.elementRef.nativeElement, subClazz);
      });
    });
  }

  private addClasses(classes: string[]) {
    classes.forEach(clazz => {
      DroppableDirective.sanitizedClass(clazz).split(" ").forEach(subClazz =>
        this.renderer.addClass(this.elementRef.nativeElement, subClazz)
      );
    });
  }

  private static sanitizedClass(clazz: string): string {
    return clazz.trim().split("( )*").join(" ");
  }
}
