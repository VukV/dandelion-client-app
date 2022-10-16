import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {HistoryService} from "./history.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  getSimilarity(textFirst: string, textSecond: string): Observable<any>{
    let url: string = this.buildUrl(textFirst, textSecond);
    this.historyService.addToHistory(url);

    return this.httpClient.get(url);
  }

  private buildUrl(textFirst: string, textSecond: string): string{
    return  environment.textSimilarityApi + "/?text1=" + textFirst + "&text2=" + textSecond + "&token=" + localStorage.getItem("token");
  }
}
