import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-led-page',
  templateUrl: './led-page.component.html',
  styleUrls: ['./led-page.component.scss']
})
export class LedPageComponent implements OnInit {
 
  Red(isChecked: boolean)
  {
    if(isChecked == true)
  {}
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
