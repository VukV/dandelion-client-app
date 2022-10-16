import {Component, OnInit} from '@angular/core';
import {Language} from "../../model/language";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text: string = "";
  availableLanguages: Language[];
  language: string;

  constructor() {
    this.availableLanguages = [
      new Language("automatic", "auto"),
      new Language("english", "en"),
      new Language("italian", "it")];
    this.language = this.availableLanguages[0].abbreviation;
  }

  ngOnInit(): void {
  }

  submitAnalysis(){
    //TODO
  }
}
