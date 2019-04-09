import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myng-if',
  templateUrl: './myng-if.component.html',
  styleUrls: ['./myng-if.component.css']
})
export class MyngIfComponent implements OnInit {
  private isMale: boolean;

  constructor() {
    this.isMale = true;
  }

  ngOnInit() {
  }

  toggle() {
    this.isMale = !this.isMale;
    return false;
  }
}
