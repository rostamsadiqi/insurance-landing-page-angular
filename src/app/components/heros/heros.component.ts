import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
})
export class HerosComponent implements OnInit {
  // backgroundImag ="jge";
  profilesImgs = [
    'assets/imgs/1.jpg',
    'assets/imgs/2.jpg',
    'assets/imgs/3.jpg',
    'assets/imgs/4.jpg',
  ];

  constructor() {}

  ngOnInit(): void {
  }
}
