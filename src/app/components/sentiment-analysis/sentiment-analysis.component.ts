import {Component, OnInit} from '@angular/core';
import {Language} from "../../model/language";
import {SentimentAnalysisService} from "../../services/sentiment-analysis.service";
import {SentimentType} from "../../model/responses/sentiment-analysis-response";
import {Color} from "../../model/color";

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

  red: Color = new Color(210, 0, 0);
  green: Color = new Color(0, 150, 5);

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

  getScoreColor(score: number): string{
    let normScore = this.normalize(score, -1, 1);
    let color = this.interpolate(this.red, this.green, normScore);

    return color.getColorCode();
  }

  private normalize(value: number, lowerBound: number, upperBound: number): number{
    return (value - lowerBound) / (upperBound - lowerBound);
  }

  private interpolate(colorFirst: Color, colorSecond: Color, value: number): Color{
    return new Color(
      colorFirst.r + (colorSecond.r - colorFirst.r) * value,
      colorFirst.g + (colorSecond.g - colorFirst.g) * value,
      colorFirst.b + (colorSecond.b - colorFirst.b) * value
    )
  }
}
