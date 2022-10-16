import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HistoryService} from "./history.service";
import {Observable} from "rxjs";
import {SentimentAnalysisResponse} from "../model/responses/sentiment-analysis-response";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  getSentimentAnalysis(text: string, language: string): Observable<SentimentAnalysisResponse>{
    let url = this.buildUrl(text, language);
    this.historyService.addToHistory(url);

    return this.httpClient.get<SentimentAnalysisResponse>(url);
  }

  private buildUrl(text: string, language: string){
    return environment.sentimentAnalysisApi + "/?lang=" + language + "/&text=" + text + "&token=" + localStorage.getItem("token");
  }
}
