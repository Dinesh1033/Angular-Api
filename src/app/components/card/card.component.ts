import { Component, OnInit,Input,Inject} from '@angular/core';
import {
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
  faDatabase
} from "@fortawesome/free-solid-svg-icons"

import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  
  @Input() post;

  constructor(
    @Inject(DOCUMENT) private _document: Document
  ) {}
  

  

  faEnvelope=faEnvelope;
  faMapMarkedAlt=faMapMarkedAlt;
  faPhone=faPhone;
  faDatabase=faDatabase;


  

  ngOnInit(): void {

  }
 


  refreshPage() {
    this._document.defaultView.location.reload();
  }

  
}
