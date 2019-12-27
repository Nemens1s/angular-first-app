import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styles: [`
    .t-color{
      color: white;
    }
  `]
})
export class Task3Component implements OnInit {
  details = 'some details';
  showDetails = false;
  logs = [];
  constructor() { }

  ngOnInit() {
  }

  onShowDetails (){
    this.showDetails = !this.showDetails;
  };
  onClick(){
    this.onShowDetails();
    this.logs.push(new Date());
  }

}
