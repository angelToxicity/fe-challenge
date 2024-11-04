import { Component, Output, EventEmitter } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { FooterComponent } from "../footer/footer.component";
import { BannerComponent } from "../banner/banner.component";
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatGridListModule, MatIconModule, MatButtonModule, MatBadgeModule, FooterComponent, BannerComponent, FormsModule, MatAutocompleteModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  @Output() added = new EventEmitter<number>()
  cards = [
    {
      name: "Chrome",
      price: "450.00",
      discount: "0.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-chrome.svg"
    },
    {
      name: "Chrome",
      price: "450.00",
      discount: "0.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-chrome.svg"
    },
    {
      name: "Chrome",
      price: "450.00",
      discount: "0.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-chrome.svg"
    },
    {
      name: "Chrome",
      price: "450.00",
      discount: "0.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-chrome.svg"
    },
    {
      name: "Firefox",
      price: "150.00",
      discount: "320.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-firefox.svg"
    },
    {
      name: "Firefox",
      price: "150.00",
      discount: "320.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-firefox.svg"
    },
    {
      name: "Firefox",
      price: "150.00",
      discount: "320.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-firefox.svg"
    },
    {
      name: "Firefox",
      price: "150.00",
      discount: "320.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-firefox.svg"
    },
    {
      name: "Opera",
      price: "170.00",
      discount: "350.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-opera.svg"
    },
    {
      name: "Opera",
      price: "170.00",
      discount: "350.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-opera.svg"
    },
    {
      name: "Opera",
      price: "170.00",
      discount: "350.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-opera.svg"
    },
    {
      name: "Opera 2",
      price: "320.00",
      discount: "0.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-opera.svg"
    },
    {
      name: "Chrome 1",
      price: "450.00",
      discount: "0.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-chrome.svg"
    },
    {
      name: "Chrome 1",
      price: "450.00",
      discount: "0.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-chrome.svg"
    },
    {
      name: "Chrome 1",
      price: "450.00",
      discount: "0.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-chrome.svg"
    },
    {
      name: "Chrome 1",
      price: "450.00",
      discount: "0.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-chrome.svg"
    },
    {
      name: "Firefox 1",
      price: "150.00",
      discount: "320.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-firefox.svg"
    },
    {
      name: "Firefox 1",
      price: "150.00",
      discount: "320.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-firefox.svg"
    },
    {
      name: "Firefox 1",
      price: "150.00",
      discount: "320.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-firefox.svg"
    },
    {
      name: "Firefox 1",
      price: "150.00",
      discount: "320.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-firefox.svg"
    },
    {
      name: "Opera 1",
      price: "170.00",
      discount: "350.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-opera.svg"
    },
    {
      name: "Opera 1",
      price: "170.00",
      discount: "350.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-opera.svg"
    },
    {
      name: "Opera 1",
      price: "170.00",
      discount: "350.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-opera.svg"
    },
    {
      name: "Opera 3",
      price: "320.00",
      discount: "0.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-opera.svg"
    },
    {
      name: "Chrome 2",
      price: "450.00",
      discount: "0.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-chrome.svg"
    },
    {
      name: "Chrome 2",
      price: "450.00",
      discount: "0.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-chrome.svg"
    },
    {
      name: "Chrome 2",
      price: "450.00",
      discount: "0.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-chrome.svg"
    },
    {
      name: "Chrome 2",
      price: "450.00",
      discount: "0.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-chrome.svg"
    },
    {
      name: "Firefox 2",
      price: "150.00",
      discount: "320.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-firefox.svg"
    },
    {
      name: "Firefox 2",
      price: "150.00",
      discount: "320.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-firefox.svg"
    },
    {
      name: "Firefox 2",
      price: "150.00",
      discount: "320.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-firefox.svg"
    },
    {
      name: "Firefox 2",
      price: "150.00",
      discount: "320.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-firefox.svg"
    },
    {
      name: "Opera 4",
      price: "170.00",
      discount: "350.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-opera.svg"
    },
    {
      name: "Opera 4",
      price: "170.00",
      discount: "350.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-opera.svg"
    },
    {
      name: "Opera 4",
      price: "170.00",
      discount: "350.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-opera.svg"
    },
    {
      name: "Opera 5",
      price: "320.00",
      discount: "0.00",
      description: "Lorem ipsum dolor sit amet consetetur sadipscingf elitr.",
      image: "/logo-opera.svg"
    }
  ]
  typeFilter = "-"
  gamesFilter = ""
  pricesFilter = ""
  myControl = ""
  indexCont = 0
  maxCont = 0
  showCont = 8
  data_paginate:any[] = []
  data_alter:any[] = []
  steps:number[] = []

  ngOnInit() {
    this.data_alter = [...this.cards]
    this.data_paginate = this.data_alter.filter((e, i) => i < this.showCont).map((element) => element)
    this.calculatePaginator(this.data_alter.length)
  }

  calculatePaginator(array_length:number) {
    let division = (array_length / this.showCont)
    let round = Math.round(division)
    this.maxCont = division > round ? round + 1 : round
    this.steps = this.createAscendingArray(this.maxCont);
  }
  
  createAscendingArray(length:number) {
    return Array.from({ length }, (_, index) => index + 1);
  }
  
  paginate(index:number) {
    this.indexCont = index - 1;
    this.data_paginate = this.data_alter.filter((e, i) => i >= this.showCont*this.indexCont && i < this.showCont*index).map((element) => element)
  }
  
  addCart(element:string) {
    let value = parseInt((document.getElementById(element) as HTMLInputElement).value)
    this.added.emit(value)
  }

  next() {
    let cont = this.indexCont + 2
    if (cont < this.maxCont+1) {
      this.paginate(cont)
    }
  }

  prev() {
    let cont = this.indexCont
    if (cont > 0) {
      this.paginate(cont)
    }
  }

  itemFilter(value:string){
    this.data_alter = this.data_alter.filter((e) => e.name.includes(value == "-" ? "" : value)).map((element) => element)
    this.data_paginate = this.data_alter.filter((e, i) => i < this.showCont).map((element) => element)
    this.calculatePaginator(this.data_alter.length)
  }
  
  priceFilter(value:string){
    this.data_alter = this.data_alter.filter((e) => e.price.includes(value)).map((element) => element)
    this.data_paginate = this.data_alter.filter((e, i) => i < this.showCont).map((element) => element)
    this.calculatePaginator(this.data_alter.length)
  }
  
  gameFilter(value:string){
    this.data_alter = this.data_alter.filter((e) => e.name.includes(value)).map((element) => element)
    this.data_paginate = this.data_alter.filter((e, i) => i < this.showCont).map((element) => element)
    this.calculatePaginator(this.data_alter.length)
  }
  
}
