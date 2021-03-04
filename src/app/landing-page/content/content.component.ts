import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger,group } from '@angular/animations';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
  animations:[
    trigger('slideInOut',[
    transition(':enter',[
      style({transform:'translateY(100%)',opacity:0}),
      animate('250ms 650ms ease-in', style({transform:'translateY(0%)',opacity:1}))
    ])
    ])
  ]})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
