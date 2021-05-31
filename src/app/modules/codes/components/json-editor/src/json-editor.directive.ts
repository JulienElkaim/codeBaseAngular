import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2
} from "@angular/core";
import {Subject} from "rxjs";
import {JsonUtilService} from "./json-util.service";

@Directive({
  selector: '[appJsonEditor]'
})
export class JsonEditorDirective implements OnInit, OnDestroy {


  @Input() delayMS?: number = 2000;
  @Input() clazzOnSuccess: string = "json-editor-default-success";
  @Input() clazzOnError: string = "json-editor-default-error";
  @Input() autoPrettify?: boolean;
  @Input() prettifyOnValueChange?: boolean;
  private timestampLastModif?: Date;

  private excludedKeys: string[] = [
    "ArrowLeft",
    "ArrowUp",
    "ArrowDown",
    "ArrowRight",
    "Control",
    "Shift",
    "Enter"
  ];

  @Input() manualPrettify!: Subject<void>;
  private actualPretty: string = "";

  @Input() set value(value: string) {
    if (value != this.getInnerText()) {
      this.setInnerText(value);
      if(this.prettifyOnValueChange){
        this.prettify();
      }
    }
  }

  @Output() valueChange = new EventEmitter<string>();

  @Output() prettifyError = new EventEmitter<string>();
  @Output() prettifySuccess = new EventEmitter<void>();

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private util: JsonUtilService) {
    this.renderer.addClass(this.elementRef.nativeElement, 'json-editor');
    this.renderer.setProperty(this.elementRef.nativeElement, 'contentEditable', true);
  }

  ngOnInit(): void {
    this.manualPrettify.subscribe(() => {
      this.prettify();
    });
  }

  ngOnDestroy(): void {
    this.manualPrettify.unsubscribe();
  }

  @HostListener('focusout', ['$event'])
  onFocus(event: FocusEvent): void {
    this.prettify();
  }

  @HostListener('keydown', ['$event'])
  keyEventDown(event: KeyboardEvent): void {
    if (event.key == 'Tab') {
      event.preventDefault();
      //TODO: Add ecrire /t a la place
    }
  }

  @HostListener('keyup', ['$event'])
  keyEventUp(event: KeyboardEvent): void {
    if (event.key == "Tab") {
      event.preventDefault();
    }

    let timeStamp: Date = new Date;
    this.timestampLastModif = timeStamp;
    this.valueChange.emit(this.getInnerText());

    if ((event.ctrlKey) && event.key == 'Enter') {
      this.prettify();
    } else {
      if (!this.autoPrettify || this.excludedKeys.includes(event.key)) {
        return;
      } else {
        this.delayedLIFOPrettify(timeStamp);
      }
    }
  }

  private delayedLIFOPrettify(timeStamp: Date): void {
    this.timestampLastModif = timeStamp;
    setTimeout(() => {
      if (timeStamp == this.timestampLastModif) {
        this.prettify();
      }
    }, this.delayMS);
  }

  private getInnerText(): string {
    return this.elementRef.nativeElement.innerText || "";
  }

  private setInnerText(value: string): void {
    this.elementRef.nativeElement.innerText = value || "";
  }


  private prettify() {
    let ugly: string = this.getInnerText() || '{}';
    try {
      let obj = JSON.parse(ugly);
      let pretty: string = this.util.defaultPrettify(obj, 2);
      this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML', pretty);
      this.actualPretty = pretty;
      this.addSuccessClass();
      this.prettifySuccess.emit();
    } catch (e) {
      this.addErrorClass();
      this.prettifyError.emit(JsonEditorDirective.translateSyntaxError(ugly, e));
    }
  }

  private addSuccessClass() {
    this.clazzOnError.split(" ").forEach(errClass =>
      this.renderer.removeClass(this.elementRef.nativeElement, errClass)
    );
    this.clazzOnSuccess.split(" ").forEach(sucClass =>
      this.renderer.addClass(this.elementRef.nativeElement, sucClass)
    );
  }

  private addErrorClass(){
    this.clazzOnSuccess.split(" ").forEach(sucClass =>
      this.renderer.removeClass(this.elementRef.nativeElement, sucClass)
    );
    this.clazzOnError.split(" ").forEach(errClass =>
      this.renderer.addClass(this.elementRef.nativeElement, errClass)
    );
  }

  private static translateSyntaxError(ugly: string, e: SyntaxError): string{
    let messageSplitted = e.message.split(" ");
    try{
      let indexOfError: number = Number.parseInt(messageSplitted[messageSplitted.length -1]);
      let valueBeforeErrorParsing: string = ugly.substr(0, indexOfError);
      let rows: string[] = valueBeforeErrorParsing.split("\n");
      let verticalIndex: number = rows.length || 1;

      let horizontalIndex: number = rows[rows.length -1].trim().length + 1 || 1;
      return `JSON parsing error row ${verticalIndex}, character position ${horizontalIndex}`;
    }catch (e) {
      return e.message;
    }
  }
}
