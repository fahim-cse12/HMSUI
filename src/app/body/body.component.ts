import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  constructor() { }
  ngOnInit(): void {
    
  }

  getBodyClass(): string{
    let styleClass = 'defaultWidth';
 
    if(this.collapsed){
      styleClass = 'body-trimmed';
    }if(this.collapsed == false && this.screenWidth > 0){
      styleClass = 'body-md-screen'
    }
       
    return styleClass;
  }

}
