import {Component, Input, OnInit} from '@angular/core';
import {CodeElement} from "../../../../model/code-element";


@Component({
  selector: 'app-code-base',
  templateUrl: './code-base.component.html',
  styleUrls: ['./code-base.component.scss']
})
export class CodeBaseComponent implements OnInit {
  public codeElementSelected!: CodeElement;
  private _codeElements: CodeElement[] = [];

  @Input()
  public set codeElements(value: CodeElement[]) {
    if(!!value){
      this._codeElements = value;
      this.defaultSelect();
    }
  };

  private defaultSelect() {
    if(!this.codeElementSelected && this.codeElements && this.codeElements.length){
      this.selectCodeElement(this.codeElements[0]);
    }
  }

  public get codeElements(): CodeElement[]{
    return this._codeElements;
  }
  constructor() { }

  ngOnInit(): void {
  }

  public log($event: any) {
    console.log($event);
  }

  public selectCodeElement(codeElement: CodeElement) {
    this.codeElementSelected = codeElement;
  }
}
