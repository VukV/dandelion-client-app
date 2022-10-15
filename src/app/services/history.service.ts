import { Injectable } from '@angular/core';
import {HistoryItem} from "../model/history-item";

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private history: HistoryItem[] = [];

  constructor() { }

  getHistory(): HistoryItem[]{
    return this.history;
  }

  addToHistory(url: string){
    this.history.push(new HistoryItem(url));
  }
}
