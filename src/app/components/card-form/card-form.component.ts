import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Card } from '../../card';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {


   newCard = new Card(0,"","");
   @Output() addCard = new EventEmitter<Card>();


  constructor() { }

  ngOnInit(): void {
  }

  //function to submit card form
   submitCard(){
     this.addCard.emit(this.newCard)
   }

}
