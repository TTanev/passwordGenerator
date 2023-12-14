import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  length = 0
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick(){
    const numbers = "1234567890";
    const letters = "abcdefghigklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()";

    let valChars = "";
    if (this.includeLetters) {valChars += letters;}
    if (this.includeNumbers) {valChars += numbers;}
    if (this.includeSymbols) {valChars += symbols;}

    let generatedPassword = '';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * valChars.length)
      generatedPassword += valChars[index]
    }

    this.password = generatedPassword
  }

  getPassword() {
    return this.password
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols
  }

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}