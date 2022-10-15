import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  inputToken: string = "";
  isTokenSet: boolean = false;

  constructor() {
    if (localStorage.getItem("token")){
      this.isTokenSet = true;
    }
  }

  ngOnInit(): void {
  }

  setToken(){
    if(this.inputToken.length != 0){
      localStorage.setItem("token", this.inputToken);
      this.isTokenSet = true;
    }
    else {
      alert("Token can't be empty!");
    }
  }

}
