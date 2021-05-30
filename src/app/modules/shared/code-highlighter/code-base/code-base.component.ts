import {Component, Input, OnInit} from '@angular/core';
import {CodeElement} from "../../../../model/code-element";
import {CodeElementService} from "../../../../services/code-element.service";


@Component({
  selector: 'app-code-base',
  templateUrl: './code-base.component.html',
  styleUrls: ['./code-base.component.scss']
})
export class CodeBaseComponent implements OnInit {
  public codeElementSelected!: CodeElement;
  private _codeElements: CodeElement[] = [];

  public errorMessage?: string;

  @Input()
  public set codeElements(value: CodeElement[]) {
    if(!!value){
      this._codeElements = value;
      this.defaultSelect();
    }
  };

  @Input()
  public set githubRaw(value: string[]){
    if(!!value){
      this.getGithubCodeElements(value);
    }
  }

  private defaultSelect() {
    if(!this.codeElementSelected && this.codeElements && this.codeElements.length){
      this.selectCodeElement(this.codeElements[0]);
    }
  }

  public get codeElements(): CodeElement[]{
    return this._codeElements;
  }
  constructor(private codeElementService: CodeElementService) { }

  ngOnInit(): void {
  }

  public log($event: any) {
    console.log($event);
  }

  public selectCodeElement(codeElement: CodeElement) {
    this.codeElementSelected = codeElement;
  }

  private getGithubCodeElements(value: string[]) {
    this.codeElementService.build(value).subscribe(res=>{
      this.codeElements = res;
    }, err=>{
      console.log("Ohoh ", err);
      this.codeElements = [new CodeElement(
        err.message,
        "ERROR"
      )]
    })
  }
}
