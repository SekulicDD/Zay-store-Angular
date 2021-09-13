import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-item',
  templateUrl: './featured-item.component.html',
  styleUrls: ['./featured-item.component.css']
})
export class FeaturedItemComponent implements OnInit {

  @Input() item:any="";

  constructor() { }

  ngOnInit(): void {
  }

}
