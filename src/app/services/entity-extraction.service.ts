import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EntityExtractionResponse} from "../model/responses/entity-extraction-response";
import {environment} from "../../environments/environment";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService {

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  getEntities(text: string, confidence: number, image: boolean, abstract: boolean, categories: boolean): Observable<EntityExtractionResponse>{
    let url: string = this.buildUrl(text, confidence, image, abstract, categories);
    this.historyService.addToHistory(url);

    return this.httpClient.get<EntityExtractionResponse>(url);
  }

  private buildUrl(text: string, confidence: number, image: boolean, abstract: boolean, categories: boolean): string {
    let include: string = "&include=";
    if(image){
      include += "image,";
    }
    if(abstract){
      include += "abstract,";
    }
    if(categories){
      include += "categories,";
    }
    include = include.substring(0, include.length - 1);

    let url: string = environment.entityExtractionApi + "/?text=" + text + "&min_confidence=" + confidence;
    if(image || abstract || categories){
      url += include;
    }

    return url + "&token=" + localStorage.getItem("token");
  }

}
