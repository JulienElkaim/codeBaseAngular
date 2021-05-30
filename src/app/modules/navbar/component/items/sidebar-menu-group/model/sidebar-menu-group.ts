import {SidebarMenuLink} from "../../sidebar-menu-link/model/sidebar-menu-link";

export class SidebarMenuGroup{
  menuNodes : (SidebarMenuLink | SidebarMenuGroup)[];
  label : string;
  expanded? : boolean = false;

  constructor(menuNodes: (SidebarMenuLink | SidebarMenuGroup)[], label: string, expanded: boolean) {
    this.menuNodes = menuNodes;
    this.label = label;
    this.expanded = expanded;
  }
}
