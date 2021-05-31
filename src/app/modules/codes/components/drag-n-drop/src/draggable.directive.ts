import {Directive, Input, Output, EventEmitter, ElementRef, Renderer2, HostListener} from '@angular/core';
import {DraggableType} from "./model/draggable-type";

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective<T extends DraggableType> {
  @Input() data!: T;
  @Input() clazzOnDragging!: string;
  @Input() dragStartCallBack!: (data: T) => void;
  @Input() dragEndCallBack!: (data: T) => void;

  @Output() dragStart = new EventEmitter<DragEvent>();
  @Output() dragEnd = new EventEmitter<DragEvent>();

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setProperty(this.elementRef.nativeElement, 'draggable', true);
  }

  @HostListener('dragstart',['$event'])
  onDragStart(dragEvent: DragEvent){
    this.clazzOnDragging.trim().split("( )*").join(" ").split(" ").forEach(onDragginClass =>
      this.renderer.addClass(this.elementRef.nativeElement, onDragginClass)
    );
    // @ts-ignore
    dragEvent.dataTransfer.effectAllowed = 'all';
    // @ts-ignore
    dragEvent.dataTransfer.setData('text/json', this.data.getDraggableValue());

    if(this.dragStartCallBack){
      this.dragStartCallBack(this.data);
    }
    this.dragStart.emit(dragEvent);
  }

  @HostListener('dragend',['$event'])
  onDragEnd(dragEvent: DragEvent){
    this.clazzOnDragging.trim().split("( )*").join(" ").split(" ").forEach(onDraggingClass=>
      this.renderer.removeClass(this.elementRef.nativeElement, onDraggingClass)
    );

    if(this.dragEndCallBack){
      this.dragEndCallBack(this.data);
    }
    this.dragEnd.emit(dragEvent);
  }


}
