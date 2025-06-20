import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css'
})
export class Variables {
  // string number data boolean

  firstName: string = "Himanshu";
  lastName: string = "";
  courseName: string;

  rollNo: number = 123;

  currentDate: Date = new Date();

  isActive: boolean = true;

  student: any;
  
  courseDuration = "3 Hours";

  constructor(){
    this.courseName= "Angular 19";
    this.rollNo=1234;
    this.student = "Himmu";
    this.student = 3243;
    this.student = false;
  }
}
