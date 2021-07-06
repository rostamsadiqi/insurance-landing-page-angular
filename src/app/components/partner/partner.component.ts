import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.css'],
})
export class PartnerComponent implements OnInit {
  parntnerImags = [
    'assets/imgs/7.png',
    'assets/imgs/8.png',
    'assets/imgs/7.png',
    'assets/imgs/8.png',
  ];

  constructor() {}

  ngOnInit(): void {}
}
