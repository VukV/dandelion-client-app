import {Component, OnInit} from '@angular/core';
import {Language} from "../../model/language";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text: string = "";
  language: Language = Language.automatic;
  availableLanguages = Object.values(Language);

  constructor() { }

  ngOnInit(): void {
  }

  submitAnalysis(){
    //TODO
  }
}
