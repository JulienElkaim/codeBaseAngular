import {Component, Input, OnInit} from '@angular/core';
import {SidebarMenuLink} from "./model/sidebar-menu-link";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar-menu-link',
  templateUrl: './sidebar-menu-link.component.html',
  styleUrls: ['./sidebar-menu-link.component.scss']
})
export class SidebarMenuLinkComponent implements OnInit {
  @Input()
  public menuNode!: SidebarMenuLink;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  currentRouteIs(names: string[]): boolean{
    return names.some(n => n === this.router.url);
  }


}
