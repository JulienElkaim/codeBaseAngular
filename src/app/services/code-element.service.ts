import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CodeElement} from "../model/code-element";
import {forkJoin, Observable, throwError} from "rxjs";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CodeElementService {

  constructor(private http: HttpClient) {
  }

  build(paths: string[]): Observable<CodeElement[]> {
    return forkJoin(
      paths.map<Observable<CodeElement>>(path =>
        this.http.get<string>(environment.githubUrl + path).pipe(
          map((res: string) => new CodeElement(res, CodeElementService.getFileName(path))),
          catchError((error: any) => throwError(error || 'GitHub error')))
      )
    );

  }

  private static getFileName(path: string) {
    return path.substring(path.lastIndexOf('/') + 1);
  }
}
