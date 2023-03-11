import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string) {
    const parsedValue = parseInt(value)

    if (!isNaN(parsedValue)) {
      this.length = parsedValue
    }
  }
  
  onChangeUseLetters(){
    this.includeLetters = !this.includeLetters;
    console.log(this.includeLetters);
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
    console.log(this.includeNumbers);
  }
  
  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
    console.log(this.includeSymbols);
  }

  onButtonClick() {
    this.password = 'MY PASSWORD!!';
  }
}
