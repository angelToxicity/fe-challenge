import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatDividerModule, MatMenuModule, MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input('item') item!:any
  @Output() action = new EventEmitter<any>();
  selectedCurrency:string = "USD";
  opened:boolean = false;
  count:number = 0;

  changeCurrency = (currency:string) => {
    this.selectedCurrency = currency
  }
  
  toggle = () => {
    this.opened = !this.opened
    this.action.emit(this.opened)
  }
}
