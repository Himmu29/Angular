import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [NgIf,FormsModule,NgFor,NgClass],
  templateUrl: './directive.html',
  styleUrl: './directive.css'
})
export class Directive {

  studDivClassName = 'bg-success';
  studEmpDivClass = "";
  productClass= '';

  isDiv1Visible: boolean = false;
  isDiv2Visible = false;

  isOrderActive: boolean = false;

  num1 = 0;
  num2 = 0;

  selectedCaste: string = "";

  cityList: string [] = ['Delhi','Mumbai','Banglore','Noida'];

  studentList: any [] = [
    {name:'Himanshu' , city:'Delhi' , isActive:true , grade:'A'},
    {name:'Chirag' , city:'Gurgaon' , isActive:true , grade:'B'},
    {name:'Maitri' , city:'Noida' , isActive:false , grade:'C'},
  ]

  addProductClass(colorName: string){
    if(colorName == 'green'){
      this.productClass = 'bg-success';
    }else{
      this.productClass = 'bg-danger';
    }
  }

  hideDiv1(){
    this.isDiv1Visible = false;
  }

  showDiv1(){
    this.isDiv1Visible = true;
  }

  hideShowDiv2(isDisplay: boolean){
    this.isDiv2Visible = isDisplay;
  }
}
