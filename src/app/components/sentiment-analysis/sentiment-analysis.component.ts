import {Component, OnInit} from '@angular/core';
import {Language} from "../../model/language";
import {SentimentAnalysisService} from "../../services/sentiment-analysis.service";
import {SentimentType} from "../../model/responses/sentiment-analysis-response";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text: string = "";
  availableLanguages: Language[];
  language: string;

  analysisScore: number | undefined;
  analysisType: SentimentType | undefined;

  constructor(private sentimentAnalysisService: SentimentAnalysisService) {
    this.availableLanguages = [
      new Language("automatic", "auto"),
      new Language("english", "en"),
      new Language("italian", "it")];
    this.language = this.availableLanguages[0].abbreviation;
  }

  ngOnInit(): void {
  }

  submitAnalysis(){
    console.log(this.analysisScore);

    if(this.text != ""){
      this.sentimentAnalysisService.getSentimentAnalysis(this.text, this.language).subscribe((analysis) => {
        this.analysisScore = analysis.sentiment.score;
        this.analysisType = analysis.sentiment.type;
      })
    }
    else{
      alert("Text field can't be empty!");
    }
  }

  interpolate(): string{
    //TODO
    return "#FFFFF"
  }
}
