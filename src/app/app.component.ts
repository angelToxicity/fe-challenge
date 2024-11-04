import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../app/components/header/header.component";
import { SidenavComponent } from "../app/components/sidenav/sidenav.component";
import { MatButtonModule } from '@angular/material/button';

const components = [HeaderComponent, SidenavComponent]
const modules = [MatButtonModule]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, components, modules],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fe-challenge';
  open = false;
  carItems = 0;

  changeToggle = (e:boolean) => {
    this.open = e
  }
  
  addCart = (item:number) => {
    this.carItems += item 
  }
}
