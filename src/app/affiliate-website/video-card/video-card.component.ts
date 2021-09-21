import { Component, OnInit } from '@angular/core';
import { VideoCardService } from './productservice';
import {Product} from './product';
@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {
  products: Product[] = [];

	responsiveOptions:any;

	constructor(private productService: VideoCardService) {
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}

  ngOnInit(): void {
    this.productService.getProductsSmall().then((products: any[]) => {
			this.products = products;
		});
  }

}
