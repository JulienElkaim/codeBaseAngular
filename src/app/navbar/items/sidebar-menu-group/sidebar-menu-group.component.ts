import {Component, Input, OnInit} from '@angular/core';
import {SidebarMenuGroup} from "../../model/sidebar-menu-group";
import {SidebarMenuLink} from "../../model/sidebar-menu-link";

@Component({
  selector: 'app-sidebar-menu-group',
  templateUrl: './sidebar-menu-group.component.html',
  styleUrls: ['./sidebar-menu-group.component.scss']
})
export class SidebarMenuGroupComponent implements OnInit {

  @Input()
  public menuNode!: (SidebarMenuGroup | SidebarMenuLink);
  constructor() { }

  ngOnInit(): void {
  }

  public nodeIsGroup(node: SidebarMenuGroup | SidebarMenuLink): node is SidebarMenuGroup {
    console.log("isGroup: ", node, (node as SidebarMenuGroup)?.menuNodes);
    return !!(node as SidebarMenuGroup)?.menuNodes;
  }
  public nodeIsLink(node: SidebarMenuGroup | SidebarMenuLink): node is SidebarMenuLink{
    console.log("isLink: ", node, (node as SidebarMenuLink)?.url);
    return !!(node as SidebarMenuLink)?.url;
  }

  getAsLink(): SidebarMenuLink{
    return (this.menuNode as SidebarMenuLink);
  }

  getAsGroup(): SidebarMenuGroup{
    return (this.menuNode as SidebarMenuGroup);
  }

}
