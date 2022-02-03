import { Component } from '@angular/core';
import { ProductService } from './productservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {


// end cards images home & kitchen
  constructor(private productService: ProductService) {


  }
}
