import { Component, Output, Input, EventEmitter } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainComponent } from "../main/main.component";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MatSidenavModule, MainComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  @Input() opened:boolean = false;
  @Output() add = new EventEmitter<number>()

  emitAddCart(event:number){
    this.add.emit(event)
  }
}
