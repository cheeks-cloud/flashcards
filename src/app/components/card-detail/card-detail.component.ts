import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Card } from '../../card'

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})

// the child,,i wantt it to receive description from card
export class CardDetailComponent implements OnInit {
 //card of type Card is what wil undergo input binding
 //we output from a method is done an eventof type boolean
  @Input() card: Card;
  @Output() isDone = new EventEmitter<boolean>();


  //the cardDiscard function that calls tehe emitt of isdone,,to pass event to paresnt
  cardDiscard(complete: boolean){
    this.isDone.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }

}