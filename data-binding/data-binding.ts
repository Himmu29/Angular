import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  courseName: string = "Angular 19";
  courseDuration = "3 Hours";
  myPlaceholderText = "Enter Course Name";
  clsName = "bg-success"
  isActive = false;

  showWelcomeText(){
    alert("hehe");
  }

  showMessage(msg: string){
    alert(msg)
  }

  onStateChange(){
    alert("State got changed");
  }
}