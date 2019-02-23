import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dateApp';
  date: Date;
  //minDate:Date;  
  ngOnInit(){
    this.date = new Date();
    this.date.setDate( this.date.getDate() + 4 );
    //this.minDate = this.date;    
  }
  minDate(): string {
    return this.date.toISOString().split('T')[0]
 } 
}
