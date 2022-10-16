export class HistoryItem {

  url: string;
  date: Date;

  constructor(url: string) {
    this.url = url;
    this.date = new Date();
  }

  toString(){
    return this.date.toLocaleString() + " " + this.url;
  }
}
