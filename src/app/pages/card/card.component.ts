import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input('title') title?: string;
  @Input('subTitle') subTitle?: string;
  @Input('photo') photo?: string;
  @Input('dribbble') dribbble?: string;
  @Input('behance') behance?: string;
  @Input('instagram') instagram?: string;
  @Input('linkedin') linkedin?: string;

  constructor() {}

  ngOnInit(): void {}
}
