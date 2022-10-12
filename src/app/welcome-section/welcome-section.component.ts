import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.scss']
})
export class WelcomeSectionComponent implements OnInit {
  time = 250;
  constructor() { }

  ngOnInit(): void {
    const buttons = document.querySelectorAll('.magnetic_container');
    buttons.forEach((elm) => {
      elm.addEventListener('mousemove', this.move.bind(this));
      elm.addEventListener('mouseenter', this.start.bind(this));
      elm.addEventListener('mouseleave', this.end.bind(this));
    });
  }

  getChilds($event) {
    return {
      background: $event.target.querySelector('.magnetic_background'),
      element: $event.target.querySelector('.magnetic_element'),
    }
  }

  move($event) {
    const x = $event.layerX - $event.target.clientWidth / 2;
    const y = $event.layerY - $event.target.clientHeight / 2;
    const { background, element } = this.getChilds($event);

    background.style.transform = `translate(${x / 4}px, ${y / 4}px)`;
    element.style.transform = `translate(${x / 3.5}px, ${y / 3.5}px)`;
  }

  startAnimation($event) {
    const transition = `all ${this.time}ms ease`;
    const { background, element } = this.getChilds($event);
    background.style.transition = transition;
    element.style.transition = transition;

  }

  endAnimation($event) {
    const { background, element } = this.getChilds($event);
    setTimeout(() => {
      background.style.transition = '';
      element.style.transition = '';
    }, this.time);
  }

  start($event) {
    this.startAnimation($event);
    this.endAnimation($event);
  }
  end($event) {
    const { background, element } = this.getChilds($event);
    this.startAnimation($event);
    background.style.transform = `translate(0px, 0px)`;
    element.style.transform = `translate(0px, 0px)`;
    this.endAnimation($event);
  }

}
