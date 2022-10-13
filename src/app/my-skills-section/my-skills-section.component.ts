import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills-section',
  templateUrl: './my-skills-section.component.html',
  styleUrls: ['./my-skills-section.component.scss']
})
export class MySkillsSectionComponent implements OnInit {
  skills: any = [
    {
      icon: 'js.png',
      name: 'JavaScript'
    },
    {
      icon: 'angular.png',
      name: 'Angular'
    },
    {
      icon: 'html.png',
      name: 'HTML5'
    },
    {
      icon: 'sass.png',
      name: 'SASS / SCSS'
    },
    {
      icon: 'scrum.png',
      name: 'SCRUM'
    },
    {
      icon: 'Git-Icon-1788C 2.png',
      name: 'GIT / GITHUB'
    },
    {
      icon: 'Group.png',
      name: 'Design Thinking'
    },
    {
      icon: 'icons8-rest-api-80 2.png',
      name: 'Rest API'
    },
    {
      icon: 'firebase.png',
      name: 'Firebase'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
