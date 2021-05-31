import { Component, OnInit } from '@angular/core';
import {SidebarMenuLink} from "./items/sidebar-menu-link/model/sidebar-menu-link";
import {SidebarMenuGroup} from "./items/sidebar-menu-group/model/sidebar-menu-group";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public menuNodes: Array<SidebarMenuLink | SidebarMenuGroup> = [
    {
      url:"/",
      label: "Home"
    },
    {
      label: 'Tutorials',
      expanded: false,
      menuNodes:[
        {
          url: "/tutorials",
          label: "Introduction"
        }
      ]
    },
    {
      label: 'Codes',
      expanded: true,
      menuNodes:[
        {
          label: 'Pipes',
          expanded: false,
          menuNodes:[
            {
              url: "/",//"/codes/pipes/sortBy",
              label: "Sort By"
            }
          ]
        },
        {
          label: 'Directives',
          expanded: false,
          menuNodes: [
            {
              url: "/codes/directives/drag-n-drop",
              label: "Drag And Drop"
            }
          ]
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
