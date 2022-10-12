import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills-section',
  templateUrl: './my-skills-section.component.html',
  styleUrls: ['./my-skills-section.component.scss']
})
export class MySkillsSectionComponent implements OnInit {
  skills: any = [
    {
      icon: 'java_script.png',
      name: 'JavaScript'
    },
    {
      icon: 'angular.png',
      name: 'Angular'
    },
    {
      icon: 'Group_205.png',
      name: 'HTML / SCSS'
    },
    {
      icon: 'Group_226.png',
      name: 'SCRUM'
    },
    {
      icon: 'Git-Icon-1788C 2.png',
      name: 'GIT'
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
      icon: 'icons8-test-lab-96 2.png',
      name: 'Test Automation'
    },
    {
      icon: 'icons8-database-52 2.png',
      name: 'Databases'
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
