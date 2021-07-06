import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  teamMember = [
    {
      title: 'Rostam Saidi',
      subTitle: 'Rostam Saidi',
      photo: '../../../assets/imgs/4.jpg',
      facebook: 'https://www.facebook.com/rostam.sadiqi/',
      twitter: 'https://twitter.com/rostamsadiqi10',
      instagram: 'https://www.instagram.com/webdesign142/',
      linkedin: 'https://www.linkedin.com/in/rostam-sadiqi-aa0003119/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
