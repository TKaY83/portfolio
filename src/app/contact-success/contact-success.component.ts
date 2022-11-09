import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-success',
  templateUrl: './contact-success.component.html',
  styleUrls: ['./contact-success.component.scss']
})
export class ContactSuccessComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }
  ngAfterViewInit(): void {
    setTimeout(() => {
      // debugger
      this.router.navigateByUrl('');
    }, 6000);
  }

  ngOnInit(): void {
  }

}
