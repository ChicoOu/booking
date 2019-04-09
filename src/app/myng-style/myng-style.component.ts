import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myng-style',
  templateUrl: './myng-style.component.html',
  styleUrls: ['./myng-style.component.css']
})
export class MyngStyleComponent implements OnInit {
  private mycolor: string;
  private fontSize: number;

  constructor() {
    this.mycolor = 'red';
    this.fontSize = 12;
  }

  ngOnInit() {
  }

  apply(color: string, fontSize: number) {
    this.mycolor = color;
    this.fontSize = fontSize;
  }

}
