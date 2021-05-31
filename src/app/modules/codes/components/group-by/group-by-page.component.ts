import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-by-page',
  templateUrl: './group-by-page.component.html',
  styleUrls: ['./group-by-page.component.scss']
})
export class GroupByPageComponent implements OnInit {
  demoFiles: string[] = [
    "src/app/modules/codes/components/group-by/demo/demo-group-by/demo-group-by.component.html",
    "src/app/modules/codes/components/group-by/demo/demo-group-by/demo-group-by.component.ts",
    "src/app/modules/codes/components/group-by/demo/demo-group-by/demo-group-by.component.scss"

  ];
  sourceFile: string[] = [
    "src/app/modules/codes/components/group-by/src/group-by.pipe.ts"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
