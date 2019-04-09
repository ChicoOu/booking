import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myng-switch',
  templateUrl: './myng-switch.component.html',
  styleUrls: ['./myng-switch.component.css']
})
export class MyngSwitchComponent implements OnInit {
  private choice: number;

  constructor() {
    this.choice = 1;
  }

  ngOnInit() {
  }

  nextChoice() {
    this.choice++;
    if (this.choice > 6) {
      this.choice = 1;
    }
    return false;
  }
}
