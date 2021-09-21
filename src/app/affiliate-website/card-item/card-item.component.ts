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


     sarii = [
      {
        "id": "1000",
        "imgLink": "https://m.media-amazon.com/images/I/41NsOuSdMXL._AC_SY200_.jpg",
        "code": "f230fh0g3",
        "description": "Product Description",
        "image": "bamboo-watch.jpg",
        "category": "Accessories",
        "quantity": 24,
        "rating": 5
      },

      {
        "id": "1001",
        "code": "nvklal433",
        "imgLink": "https://m.media-amazon.com/images/I/41J47D2sZ1L._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "black-watch.jpg",
        "category": "Accessories",
        "quantity": 61,
        "rating": 4
      },
      {
        "id": "1002",
        "code": "zz21cz3c1",
        "imgLink": "https://m.media-amazon.com/images/I/418G20e1uML._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "blue-band.jpg",
        "category": "Fitness",
        "quantity": 2,
        "rating": 3
      },
      {
        "id": "1003",
        "code": "244wgerg2",
        "imgLink": "https://m.media-amazon.com/images/I/415-YFUmWUL._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "blue-t-shirt.jpg",
        "category": "Clothing",
        "quantity": 25,
        "rating": 5
      },
      {
        "id": "1004",
        "code": "h456wer53",
        "imgLink": "https://m.media-amazon.com/images/I/41cq0v4VUsL._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "bracelet.jpg",
        "category": "Accessories",
        "quantity": 73,
        "rating": 4
      },
      {
        "id": "1005",
        "code": "av2231fwg",
        "imgLink": "https://m.media-amazon.com/images/I/41SUl97RLOL._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "brown-purse.jpg",
        "category": "Accessories",
        "quantity": 0,
        "rating": 4
      },
      {
        "id": "1006",
        "code": "bib36pfvm",
        "imgLink": "https://m.media-amazon.com/images/I/41cLdbcWihL._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "chakra-bracelet.jpg",
        "category": "Accessories",
        "quantity": 5,
        "rating": 3
      },
      {
        "id": "1007",
        "code": "mbvjkgip5",
        "imgLink": "https://m.media-amazon.com/images/I/41upR4GZTIL._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "galaxy-earrings.jpg",
        "category": "Accessories",
        "quantity": 23,
        "rating": 5
      },
      {
        "id": "1008",
        "code": "vbb124btr",
        "imgLink": "https://m.media-amazon.com/images/I/41VCuREtqSL._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "game-controller.jpg",
        "category": "Electronics",
        "quantity": 2,
        "rating": 4
      },
      {
        "id": "1009",
        "code": "cm230f032",
        "imgLink": "https://m.media-amazon.com/images/I/41NVgAbuApL._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "gaming-set.jpg",
        "category": "Electronics",
        "quantity": 63,
        "rating": 3
      },
      {
        "id": "1010",
        "code": "cm230f032",
        "imgLink": "https://m.media-amazon.com/images/I/410Mjpd3a7L._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "gaming-set.jpg",
        "category": "Electronics",
        "quantity": 63,
        "rating": 3
      },
      {
        "id": "1011",
        "code": "cm230f032",
        "imgLink": "https://m.media-amazon.com/images/I/41hXcJgjshL._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "gaming-set.jpg",
        "category": "Electronics",
        "quantity": 63,
        "rating": 3
      },
      {
        "id": "1012",
        "code": "cm230f032",
        "imgLink": "https://m.media-amazon.com/images/I/41IlFt3DQxL._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "gaming-set.jpg",
        "category": "Electronics",
        "quantity": 63,
        "rating": 3
      },
      {
        "id": "1013",
        "code": "cm230f032",
        "imgLink": "https://m.media-amazon.com/images/I/41NVgAbuApL._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "gaming-set.jpg",
        "category": "Electronics",
        "quantity": 63,
        "rating": 3
      }

    ]
    exercise  = [
      {
        "id": "1000",
        "imgLink": "https://m.media-amazon.com/images/I/51CTr1uZGLL._AC_SY200_.jpg",
        "code": "f230fh0g3",
        "description": "Product Description",
        "image": "bamboo-watch.jpg",
        "category": "Accessories",
        "quantity": 24,
        "rating": 5
      },

      {
        "id": "1001",
        "code": "nvklal433",
        "imgLink": "https://m.media-amazon.com/images/I/41aK1czSiML._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "black-watch.jpg",
        "category": "Accessories",
        "quantity": 61,
        "rating": 4
      },
      {
        "id": "1002",
        "code": "zz21cz3c1",
        "imgLink": "https://m.media-amazon.com/images/I/41MA35hsQ8L._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "blue-band.jpg",
        "category": "Fitness",
        "quantity": 2,
        "rating": 3
      },
      {
        "id": "1003",
        "code": "244wgerg2",
        "imgLink": "https://m.media-amazon.com/images/I/41r3zjgA5gL._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "blue-t-shirt.jpg",
        "category": "Clothing",
        "quantity": 25,
        "rating": 5
      },
      {
        "id": "1004",
        "code": "h456wer53",
        "imgLink": "https://m.media-amazon.com/images/I/41gVQAyKOKL._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "bracelet.jpg",
        "category": "Accessories",
        "quantity": 73,
        "rating": 4
      },
      {
        "id": "1005",
        "code": "av2231fwg",
        "imgLink": "https://m.media-amazon.com/images/I/41Xtt9pe-CL._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "brown-purse.jpg",
        "category": "Accessories",
        "quantity": 0,
        "rating": 4
      },
      {
        "id": "1006",
        "code": "bib36pfvm",
        "imgLink": "https://m.media-amazon.com/images/I/31ubRKY9J-S._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "chakra-bracelet.jpg",
        "category": "Accessories",
        "quantity": 5,
        "rating": 3
      },
      {
        "id": "1007",
        "code": "mbvjkgip5",
        "imgLink": "https://m.media-amazon.com/images/I/31FloxvsU8L._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "galaxy-earrings.jpg",
        "category": "Accessories",
        "quantity": 23,
        "rating": 5
      },
      {
        "id": "1008",
        "code": "vbb124btr",
        "imgLink": "https://m.media-amazon.com/images/I/31wRWDUcn+L._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "game-controller.jpg",
        "category": "Electronics",
        "quantity": 2,
        "rating": 4
      },
      {
        "id": "1009",
        "code": "cm230f032",
        "imgLink": "https://m.media-amazon.com/images/I/412tNR4bsuL._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "gaming-set.jpg",
        "category": "Electronics",
        "quantity": 63,
        "rating": 3
      },
      {
        "id": "1010",
        "code": "cm230f032",
        "imgLink": "https://m.media-amazon.com/images/I/41dUnKL9+PL._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "gaming-set.jpg",
        "category": "Electronics",
        "quantity": 63,
        "rating": 3
      },
      {
        "id": "1011",
        "code": "cm230f032",
        "imgLink": "https://m.media-amazon.com/images/I/41it-H7hTZL._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "gaming-set.jpg",
        "category": "Electronics",
        "quantity": 63,
        "rating": 3
      },
      {
        "id": "1012",
        "code": "cm230f032",
        "imgLink": "https://m.media-amazon.com/images/I/413ugQEP3IS._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "gaming-set.jpg",
        "category": "Electronics",
        "quantity": 63,
        "rating": 3
      },
      {
        "id": "1013",
        "code": "cm230f032",
        "imgLink": "https://m.media-amazon.com/images/I/41J8A7kbFUL._AC_SY200_.jpg",
        "description": "Product Description",
        "image": "gaming-set.jpg",
        "category": "Electronics",
        "quantity": 63,
        "rating": 3
      }

    ]



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
