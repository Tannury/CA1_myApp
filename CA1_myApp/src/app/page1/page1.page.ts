import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page {


  facts = [
    {
      id: 1,
      title: 'Saudade',
      image: 'assets/images/saudade.jpg',
      details: 'Interesting fact 1',
      expanded: false,
    },
    {
      id: 2,
      title: 'Futebol',
      image: 'assets/images/futebol.jpg',
      details: 'Interesting fact 2',
      expanded: false,
    },
    {
      id: 3,
      title: 'Festa',
      image: 'assets/images/festa.jpg',
      details: 'Interesting fact 3',
      expanded: false,
    },
  ];

  selectedFact: any;

  toggleFactDetails(fact: any) {
    fact.expanded = !fact.expanded;
    this.selectedFact = fact.expanded ? fact : null;
  }

  generateRandomFact() {
    const randomIndex = Math.floor(Math.random() * this.facts.length);
    const randomFact = this.facts[randomIndex];
    this.toggleFactDetails(randomFact);

  }

}
