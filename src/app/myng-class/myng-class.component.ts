import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myng-class',
  templateUrl: './myng-class.component.html',
  styleUrls: ['./myng-class.component.css']
})
export class MyngClassComponent implements OnInit {
  private isBordered: boolean;

  constructor() {
    this.isBordered = false;
  }

  ngOnInit() {
  }

  toggleBorder() {
    this.isBordered = !this.isBordered;
    return false;
  }
}
