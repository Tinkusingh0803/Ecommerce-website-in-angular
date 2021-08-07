import { Component, OnInit } from '@angular/core';
import { ProductService } from './productservice';
import {Product} from './product';
@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {

  products: Product[] = [];
  productsData: Product[] = [];
  productsSnack: Product[]=[];
  freedomFestival: Product[] = [];
	responsiveOptions: any;

  cardLinkAll=[
    {
      cardLink: "https://images-eu.ssl-images-amazon.com/images/G/31/Launchpad/3PA-2021/AugART/PC-QC/LR-HL3._SY116_CB645429472_.jpg",
      cardLink1: "https://images-eu.ssl-images-amazon.com/images/G/31/Launchpad/3PA-2021/AugART/Tiles/Row-6_186x116._SY116_CB645525501_.jpg",
      cardLink2: "https://images-eu.ssl-images-amazon.com/images/G/31/Launchpad/3PA-2021/AugART/Tiles/Row-5_186x116._SY116_CB645525501_.jpg",
      cardLink3: "https://images-eu.ssl-images-amazon.com/images/G/31/Launchpad/3PA-2021/AugART/PC-QC/LR-HL4._SY116_CB645429472_.jpg",
      cardLink4: "https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/AugART21/Saree_1x._SY116_CB645621754_.jpg",
      cardLink5: "https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/AugART21/Kurtis2_1x._SY116_CB645621754_.jpg",
      cardLink6: "https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/AugART21/T-shirts3_1x._SY116_CB645621754_.jpg",
      cardLink7: "https://images-eu.ssl-images-amazon.com/images/G/31/cross-site/AugART21/Dresses4_1x._SY116_CB645621754_.jpg",
      cardLink8: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/AugART/BTF/Pantry/PC/x1/QC_1_Cooking_ess_._SY116_CB645425290_.jpg",
      cardLink9: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/AugART/BTF/Pantry/PC/x1/QC_3_Beauty_ess_._SY116_CB645425290_.jpg ",
      cardLink10: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/AugART/BTF/Pantry/PC/x1/QC_2_HH_ess._SY116_CB645425290_.jpg ",
      cardLink11: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/AugART/BTF/Pantry/PC/x1/QC_4_Snacks__bev_._SY116_CB645425285_.jpg",
      cardLink12: "https://images-eu.ssl-images-amazon.com/images/G/31/gps/banners/default/banners/location/change/me/xcm_banners_augart_2021_qc-186x116-product-badge-ebm80-ekzpj_372x232_in-en._SY116_CB645427382_.jpg ",
      cardLink13: "https://images-eu.ssl-images-amazon.com/images/G/31/gps/banners/default/banners/location/change/me/xcm_banners_augart_2021_qc-186x116-product-badge-ebm80-nvyka_372x232_in-en._SY116_CB645427343_.jpg",
      cardLink14: "https://images-eu.ssl-images-amazon.com/images/G/31/gps/banners/default/banners/location/change/me/xcm_banners_augart_2021_qc-186x116-product-badge-ebm80-qkkls_372x232_in-en._SY116_CB645427379_.jpg ",
      cardLink15: "https://images-eu.ssl-images-amazon.com/images/G/31/gps/banners/default/banners/location/change/me/xcm_banners_augart_2021_qc-186x116-product-badge-ebm80-f26ko_372x232_in-en._SY116_CB645427377_.jpg ",

    }
  ]

  constructor(private productService: ProductService) {
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
    this.productService.getProductsSmall().then(products => {
			this.products = products;
		});
    this.productService.getProductsData().then(productData =>{
      this.productsData = productData;
      console.log(this.productsData)
    });
    this.productService.getLovedSnack().then(productData =>{
      this.productsSnack = productData;
      console.log(this.productsSnack)
    });
    this.productService.getFreedomFestival().then(productData =>{
      this.freedomFestival = productData;
      console.log(this.freedomFestival)
    });
  }

}
