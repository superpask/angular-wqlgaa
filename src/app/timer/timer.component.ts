import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class ClickStartStop {
  clickMessage = "";

  onStart() {
    this.clickMessage = "started";
  };

  onStop() {
 this.clickMessage = "stopped";

  }
}