import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work-section',
  templateUrl: './my-work-section.component.html',
  styleUrls: ['./my-work-section.component.scss']
})
export class MyWorkSectionComponent implements OnInit {
  constructor() { }
  showAngular = true;
  showJavaScript = true;
  ngOnInit(): void {
  }

  showAllFunc() {
    this.showAngular = true;
    this.showJavaScript = true;
  }

  showAngularFunc() {
    this.showJavaScript = false;
    this.showAngular = true;
  }

  showJavaScriptFunc() {
    this.showAngular = false;
    this.showJavaScript = true;
  }

}
