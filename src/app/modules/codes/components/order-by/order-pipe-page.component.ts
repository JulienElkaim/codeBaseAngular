import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sort-pipe-page',
  templateUrl: './order-pipe-page.component.html',
  styleUrls: ['./order-pipe-page.component.scss']
})
export class OrderPipePageComponent implements OnInit {
  demoFiles: string[] = [
    "src/app/modules/codes/components/order-by/demo/demo-order-by/demo-order-by.component.html",
    "src/app/modules/codes/components/order-by/demo/demo-order-by/demo-order-by.component.scss",
    "src/app/modules/codes/components/order-by/demo/demo-order-by/demo-order-by.component.ts",
  ];
  sourceFile: string[] = [
    "src/app/modules/codes/components/order-by/src/order-by.pipe.ts"
  ];

  constructor() {
  }

  ngOnInit(): void {
  }


}
