import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //declare property values
  cards:Card[] = [
   new Card ( 1, "Javascript","is a front end frameWork"),
   new Card ( 2, "Jquery","is a front end old frameWork"),
   new Card ( 3, "Angular","is a frontend javascript frameWork"),
   new Card ( 4, "Angular","is a frontend javascript frameWork")
    
  ];

  //logic for toggling Description
  toggleDescription(index){
    this.cards[index].showDescription = !this.cards[index].showDescription;
  }
 //function triggered when event isDone is emitted and caught
   
    completeCard(isDone, index) {
      if(isDone){
        let toDelete = confirm(`Are you sure you want to delete ${this.cards[index].name}?`)
      if(toDelete){
        this.cards.splice(index, 1);
      }
      
      }
      
    }

    //function triggered after a card is added succesfully

    addNewCard(card){
      let cardLength = this.cards.length
      card.id = cardLength + 1;
      this.cards.push(card);
    }

  constructor() {}
    
   
  ngOnInit(): void {
  }

}
//structural directives change structure of page and they begin with