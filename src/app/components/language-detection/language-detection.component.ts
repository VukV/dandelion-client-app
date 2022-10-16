import { Component, OnInit } from '@angular/core';
import {LanguageDetectionService} from "../../services/language-detection.service";
import {DetectedLanguage} from "../../model/responses/language-detection-response";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text: string = "";
  clean: boolean = false;

  detectedLanguages: DetectedLanguage[] = [];

  constructor(private languageDetectionService: LanguageDetectionService) { }

  ngOnInit(): void {
  }

  submitDetection(){
    if(this.text != ""){
      this.languageDetectionService.getDetectedLanguages(this.text, this.clean).subscribe((detection) => {
        this.detectedLanguages = detection.detectedLangs;
      })
    }
    else{
      alert("Text field can't be empty!");
    }
  }
}
