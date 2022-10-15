import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  token: string | null;

  constructor() {
    this.token = localStorage.getItem("token");
  }

  ngOnInit(): void {
  }

}
