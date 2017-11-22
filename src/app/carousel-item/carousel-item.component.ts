import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.css']
})
export class CarouselItemComponent implements OnInit {
	@Input() header: string = 'Needs to be given';
	@Input() subHeader: string = 'Needs to be given';
	@Input() subject: string = 'what is this car-item about'
	veganUrl = "/assets/images/vegan.jpg";
	// veganUrl = "/assets/images/vegan_2.jpg";

  constructor() { }

  ngOnInit() {
  }

}
