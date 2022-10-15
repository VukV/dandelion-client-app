import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text: string = "";
  clean: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  submitDetection(){
    //TODO
  }
}
