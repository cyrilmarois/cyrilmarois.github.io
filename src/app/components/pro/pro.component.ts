import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.scss']
})
export class ProComponent implements OnInit {

  currentDateCompanyWork: number;

  constructor() { }

  ngOnInit() {
    const currentDate: number  = new Date().getFullYear();
    const currentDateBeginLastWork: number = new Date('2015-11-01').getFullYear();
    console.warn(currentDateBeginLastWork, typeof currentDateBeginLastWork);
    this.currentDateCompanyWork = currentDate - currentDateBeginLastWork;
    console.warn(currentDate, typeof currentDate, this.currentDateCompanyWork, typeof this.currentDateCompanyWork);
  }

}
