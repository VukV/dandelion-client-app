import { Component, OnInit } from '@angular/core';
import {EntityExtractionService} from "../../services/entity-extraction.service";
import {Entity} from "../../model/responses/entity-extraction-response";

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

  entities: Entity[] = [];

  isReadMore = true

  constructor(private entityExtractionService: EntityExtractionService) { }

  ngOnInit(): void {
  }

  getConfidenceLabel(): string{
    return "Confidence: " + this.confidence/100;
  }

  submitExtraction(){
    if (this.text != ""){
      this.entityExtractionService.getEntities(this.text, this.confidence/100, this.image, this.abstract, this.categories).subscribe((entity) => {
        for(let e of entity.annotations){
          e.isReadMore = true;
        }
        this.entities = entity.annotations;
      })
    }
  }

  showText(entity: Entity) {
    entity.isReadMore = !entity.isReadMore;
  }
}
