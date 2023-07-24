import { Component, signal } from '@angular/core';


interface MenuItem{
  title:string;
  route:string;
}
@Component({
  selector:'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  //que es un signal?
  //Es un espacio en memoria que apunta o sabe en todo momento donde se esta usando,
  // Es programación reactiva de forma simplificada

  public menuItems = signal<MenuItem[]>([
      {
        title:'Contador',route:'counter'
      },
      {
        title:'Usuario',route:'user-info'
      },
      {
        title:'Mutaciones',route:'properties'
      },
    ]);

  // public menuItems:MenuItem[]=[
  //   {
  //     title:'Contador',route:'counter'
  //   },
  //   {
  //     title:'Usuario',route:'user-info'
  //   },
  //   {
  //     title:'Mutaciones',route:'properties'
  //   },
  // ]
}
