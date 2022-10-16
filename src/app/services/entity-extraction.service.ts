import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService implements UrlBuilder{

  constructor(private httpClient: HttpClient) { }

  

  buildUrl(): string {
    return "";
  }

}
