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
  toggleAngular = false;
  toggleJavaScript = false;
  toggleAll = true;
  ngOnInit(): void {
  }

  showAllFunc() {
    this.showAngular = true;
    this.showJavaScript = true;
    this.toggleAngular = false;
    this.toggleJavaScript = false;
    this.toggleAll = true;
  }

  showAngularFunc() {
    this.showJavaScript = false;
    this.showAngular = true;
    this.toggleAngular = true;
    this.toggleJavaScript = false;
    this.toggleAll = false;

  }

  showJavaScriptFunc() {
    this.showAngular = false;
    this.showJavaScript = true;
    this.toggleJavaScript = true;
    this.toggleAll = false;
    this.toggleAngular = false;

  }

}
