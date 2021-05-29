export class SidebarMenuLink{
  url: string = "#";
  label: string;
  notLocal?: boolean = true;

  constructor(url: string, label: string, notLocal: boolean) {
    this.url = url;
    this.label = label;
  }
}
