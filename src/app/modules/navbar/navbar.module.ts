import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./component/navbar.component";
import {SidebarMenuGroupComponent} from "./component/items/sidebar-menu-group/sidebar-menu-group.component";
import {SidebarMenuLinkComponent} from "./component/items/sidebar-menu-link/sidebar-menu-link.component";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarMenuGroupComponent,
    SidebarMenuLinkComponent
  ],
  imports: [
    SharedModule
  ],
  exports:[
    NavbarComponent
  ]
})
export class NavbarModule { }
