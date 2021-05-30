
export class CodeElement {
 code!: string;
 fileName!: string;

 constructor(code: string, fileName: string){
   this.code = code;
   this.fileName = fileName;
 }
}
