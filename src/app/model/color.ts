export class Color {

  r: number = 0;
  g: number = 0;
  b: number = 0;

  constructor(r: number, g: number, b: number) {
    this.r = this.applyColorCode(r);
    this.g = this.applyColorCode(g);
    this.b = this.applyColorCode(b);
  }

  private applyColorCode(value: number): number{
    if(value < 0){
      return 0;
    }
    else if (value > 255){
      return 255;
    }
    else {
      return value;
    }
  }

  getColorCode(): string{
    return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")";
  }
}
