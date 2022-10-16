import { Component, OnInit } from '@angular/core';
import {TextSimilarityService} from "../../services/text-similarity.service";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  textFirst: string = "";
  textSecond: string = "";

  similarity: number = -1;

  constructor(private textSimilarityService: TextSimilarityService) { }

  ngOnInit(): void {
  }

  submitSimilarity(){
    if(this.textFirst != "" && this.textSecond != ""){
      this.textSimilarityService.getSimilarity(this.textFirst, this.textSecond).subscribe((res: any) => {
        this.similarity = res.similarity;
      })
    }
    else {
      alert("Text fields can't be empty!");
    }
  }
}
