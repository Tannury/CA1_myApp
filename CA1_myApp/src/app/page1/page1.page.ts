import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {


  facts = [
    {
      id: 1,
      content: 'Fact 1: Lorem ipsum dolor sit amet.',
    },
    {
      id: 2,
      content: 'Fact 2: Consectetur adipiscing elit.',
    },
    // Add more facts as needed
  ];

  constructor() { }

  ngOnInit() {
  }

}
