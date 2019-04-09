import { Component, OnInit } from '@angular/core';
import { Student, ALL_STUDENTS } from '../student';

@Component({
  selector: 'app-stu',
  templateUrl: './stu.component.html',
  styleUrls: ['./stu.component.css']
})
export class StuComponent implements OnInit {
  private students: Student[];
  private showMale: number;
  private showCourse: number;

  constructor() {
    this.students = ALL_STUDENTS;
    this.showMale = 2;
    this.showCourse = 2;
  }

  ngOnInit() {
  }

  btnName() {
    if (this.showMale == 0) {
      return '显示男生';
    }
    else if (this.showMale == 1) {
      return '显示全部';
    }
    else {
      return '显示女生';
    }
  }

  shouldShow(s: Student): boolean {
    return this.showMale == 2 ||
      s.gender == this.showMale;
  }

  countStyle(count: number) {
    let style = {
      color: 'white',
      'background-color': 'red'
    };

    if (count >= 90) {
      style.color = 'white';
      style['background-color'] = 'green';
    }
    else if (count < 60) {
      style.color = 'white';
      style['background-color'] = 'red';
    }
    else {
      style.color = 'black';
      style['background-color'] = 'white';
    }

    return style;
  }

  toggleMyShowCourse() {
    if (this.showCourse == 2) {
      this.showCourse = 1;
    }
    else {
      this.showCourse = 2;
    }
    return false;
  }

  toggleShow() {
    if (this.showMale == 0) {
      this.showMale = 1;
    }
    else if (this.showMale == 1) {
      this.showMale = 2;
    }
    else {
      this.showMale = 0;
    }
    return false;
  }
}
