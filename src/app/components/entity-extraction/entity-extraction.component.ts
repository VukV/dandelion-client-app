import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  text: string = "";
  confidence: number = 60;
  image: boolean = false;
  abstract: boolean = false;
  categories: boolean =  false;

  constructor() { }

  ngOnInit(): void {
  }

  getConfidenceLabel(): string{
    return "Confidence: " + this.confidence/100;
  }

  submitExtraction(){
    //TODO call service
  }
}
