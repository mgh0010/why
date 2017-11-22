import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
	fnfUrl = "/assets/images/fnf.jpg";
	lectioDivinaUrl = "/assets/images/lectio-divina.jpg";
	natureUrl = "/assets/images/nature.png";

  constructor() { }

  ngOnInit() {
  }

}
