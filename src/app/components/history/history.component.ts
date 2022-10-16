import { Component, OnInit } from '@angular/core';
import {HistoryService} from "../../services/history.service";
import {HistoryItem} from "../../model/history-item";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private historyService: HistoryService) { }

  ngOnInit(): void {
  }

  getHistory(): HistoryItem[]{
    return this.historyService.getHistory();
  }

}
