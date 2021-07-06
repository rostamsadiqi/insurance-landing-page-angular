import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {

  teamMember = [
    {
      title: 'Rostam Sadiqi',
      subTitle: 'Chief Executive Officer',
      photo: 'assets/imgs/4.jpg',
      dribbble: 'https://dribbble.com/rostamsadiqi',
      behance: 'https://www.behance.net/rostamsadiqi',
      instagram: 'https://www.instagram.com/webdesign142/',
      linkedin: 'https://www.linkedin.com/in/rostam-sadiqi-aa0003119/',
    },
    {
      title: 'John Smith',
      subTitle: 'Head of Strategy',
      photo: 'assets/imgs/1.jpg',
      dribbble: 'https://dribbble.com/rostamsadiqi',
      behance: 'https://www.behance.net/rostamsadiqi',
      instagram: 'https://www.instagram.com/webdesign142/',
      linkedin: 'https://www.linkedin.com/in/rostam-sadiqi-aa0003119/',
    },
    {
      title: 'Sophia Alex',
      subTitle: 'Marketing Specialist',
      photo: 'assets/imgs/2.jpg',
      dribbble: 'https://dribbble.com/rostamsadiqi',
      behance: 'https://www.behance.net/rostamsadiqi',
      instagram: 'https://www.instagram.com/webdesign142/',
      linkedin: 'https://www.linkedin.com/in/rostam-sadiqi-aa0003119/',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
