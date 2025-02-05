import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: false,
})
export class SearchPage implements OnInit {

  images: any[] = [
    { img: 'assets/images/teto.png', size: '6' },
    { img: 'assets/images/teto.png', size: '6' },
    { img: 'assets/images/teto.png', size: '4' },
    { img: 'assets/images/teto.png', size: '4' },
    { img: 'assets/images/teto.png', size: '4' },
    { img: 'assets/images/teto.png', size: '6' },
    { img: 'assets/images/teto.png', size: '6' },
    { img: 'assets/images/teto.png', size: '6' },
    { img: 'assets/images/teto.png', size: '6' },
    { img: 'assets/images/teto.png', size: '3' },
    { img: 'assets/images/teto.png', size: '3' },
    { img: 'assets/images/teto.png', size: '3' },
    { img: 'assets/images/teto.png', size: '3' },
    { img: 'assets/images/teto.png', size: '6' },
    { img: 'assets/images/teto.png', size: '6' },
    { img: 'assets/images/teto.png', size: '4' },
    { img: 'assets/images/teto.png', size: '4' },
    { img: 'assets/images/teto.png', size: '4' },
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
