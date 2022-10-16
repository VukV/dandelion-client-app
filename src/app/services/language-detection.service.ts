import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HistoryService} from "./history.service";
import {LanguageDetectionResponse} from "../model/responses/language-detection-response";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  getDetectedLanguages(text: string, clean: boolean){
    let url = this.buildUrl(text, clean);
    this.historyService.addToHistory(url);

    return this.httpClient.get<LanguageDetectionResponse>(url);
  }

  private buildUrl(text: string, clean: boolean): string{
    let url: string = environment.languageDetectionApi + "/?text=" + text;
    if (clean){
      url += "&clean=true"
    }

    return url + "&token=" + localStorage.getItem("token");
  }
}
