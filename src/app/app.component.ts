import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = '';
  date = '';
  amount:number = 0;

  onNameChange(value:string){
    this.name = value;
  }

  onDateSet(value:string){
    this.date = value;
  }

  onAmountSet(value:string){
      this.amount = parseFloat(value);
  }
}
