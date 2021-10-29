import { Component } from '@angular/core';
import { ProductService } from './productservice';
import {Product} from './product';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
      :host ::ng-deep .ui-slidemenu {
          width: 13.5em
      }
  `]
})
export class AppComponent {
  items!: MenuItem[];

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

  cardLink=[
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

    carousel=[
      {
    img: "https://m.media-amazon.com/images/I/61Ht5F14wVL._SX3000_.jpg",
    img1: "https://m.media-amazon.com/images/I/71FzQCchyoL._SX3000_.jpg",
    img2: "https://m.media-amazon.com/images/I/614KxitvEpL._SX3000_.jpg",
    img13: "https://m.media-amazon.com/images/I/61r7T5GApGL._SX3000_.jpg",
    img14: "https://m.media-amazon.com/images/I/6167OQeLNPL._SX3000_.jpg",
    img15: "https://m.media-amazon.com/images/I/61hzCXFkLXL._SX3000_.jpg",
    img16: "https://m.media-amazon.com/images/I/617KUu4TJkL._SX3000_.jpg",
    img3: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/AugART2021/DesktopGateway_CategoryCard_758X6081._SY304_CB645431419_.jpg",
    img4: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/AugArt/GW/xcm_banners_dqc_1_186x116_in-en._SY116_CB645422465_.jpg",
    img5: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/AugArt/GW/xcm_banners_dqc_2_186x116_in-en._SY116_CB645422489_.jpg",
    img6: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/AugArt/GW/xcm_banners_dqc_3_186x116_in-en._SY116_CB645422466_.jpg",
    img7: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/AugArt/GW/xcm_banners_dqc_4_186x116_in-en._SY116_CB645422492_.jpg",
    img8: "https://images-eu.ssl-images-amazon.com/images/G/31/gps/banners/default/banners/location/change/me/xcm_banners_augart_2021_qc-186x116-product-badge-ebm80-t8j36_372x232_in-en._SY116_CB645427343_.jpg",
    img9: "https://images-eu.ssl-images-amazon.com/images/G/31/major_appliances/nirshai/augart_qc_pc/xcm_banners_wm-0b3vf_186x116_in-en._SY116_CB645423587_.jpg",
img10: "https://images-eu.ssl-images-amazon.com/images/G/31/gps/banners/default/banners/location/change/me/xcm_banners_augart_2021_qc-186x116-product-badge-ebm80-0utym_372x232_in-en._SY116_CB645427376_.jpg",
img11: "https://images-eu.ssl-images-amazon.com/images/G/31/major_appliances/nirshai/augart_qc_pc/xcm_banners_ref_186x116_in-en._SY116_CB645423614_.jpg",
img12: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Brand_days/Aug_ART/V2/2x._SY116_CB645434538_.jpg"
  }
]

// start cards images home & kitchen
cardLinkAll=[
  {
    cardLink: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Smallappliances/AugArt-21/QuadCard_186x116-1._SY116_CB663190778_.jpg",
    cardLink1: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2021/AUGART/OHLGWQC/QuadCard_186x116-2._SY116_CB664740317_.jpg",
    cardLink2: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/kitchen/PD21/PDQC-186x116-1._SY116_CB664643930_.jpg",
    cardLink3: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Sports/AugART21/186x116_REC._SY116_CB664731727_.jpg",
    cardLink4: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/AugArt21/1x_top-products-Tile-1._SY116_CB645261417_.jpg",
    cardLink5: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/AugArt21/1x_top-products-Tile-3._SY116_CB645261417_.jpg",
    cardLink6: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/AugArt21/1x_top-products-Tile-2._SY116_CB645261417_.jpg",
    cardLink7: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/AugArt21/1x_top-products-Tile-4._SY116_CB645261417_.jpg",
    cardLink8: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Brand_days/Aug_ART/V2/2x._SY116_CB645434538_.jpg",
    cardLink9: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Brand_days/Aug_ART/V2/3x._SY116_CB645434538_.jpg",
    cardLink10: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/AugART2021/NewLaunches/WTS_GW/D26225814_AugART_LatestLaunchPC_quad._SY116_CB645256984_.jpg",
    cardLink11: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/AugART2021/NewLaunches/WTS_GW/PC_newlaunches_l._SY116_CB645004488_.jpg",
    cardLink12: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/AugART/BTF/Deals_MF_PC/01_Clothing._SY116_CB645260349_.jpg",
    cardLink13: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/AugART/BTF/Deals_MF_PC/02_Footware._SY116_CB645260349_.jpg",
    cardLink14: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/AugART/BTF/Deals_MF_PC/03_Bags_luggage._SY116_CB645260349_.jpg",
    cardLink15: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/AugART/BTF/Deals_MF_PC/04_watches._SY116_CB645260349_.jpg"

  }
]
// end cards images home & kitchen
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

    this.items = [
      {
         label:'File',
         icon:'pi pi-fw pi-file',
         items:[
            {
               label:'New',
               icon:'pi pi-fw pi-plus',
               items:[
                  {
                     label:'Bookmark',
                     icon:'pi pi-fw pi-bookmark'
                  },
                  {
                     label:'Video',
                     icon:'pi pi-fw pi-video'
                  },

               ]
            },
            {
               label:'Delete',
               icon:'pi pi-fw pi-trash'
            },
            {
               separator:true
            },
            {
               label:'Export',
               icon:'pi pi-fw pi-external-link'
            }
         ]
      },
      {
         label:'Edit',
         icon:'pi pi-fw pi-pencil',
         items:[
            {
               label:'Left',
               icon:'pi pi-fw pi-align-left'
            },
            {
               label:'Right',
               icon:'pi pi-fw pi-align-right'
            },
            {
               label:'Center',
               icon:'pi pi-fw pi-align-center'
            },
            {
               label:'Justify',
               icon:'pi pi-fw pi-align-justify'
            },

         ]
      },
      {
         label:'Users',
         icon:'pi pi-fw pi-user',
         items:[
            {
               label:'New',
               icon:'pi pi-fw pi-user-plus',

            },
            {
               label:'Delete',
               icon:'pi pi-fw pi-user-minus',

            },
            {
               label:'Search',
               icon:'pi pi-fw pi-users',
               items:[
                  {
                     label:'Filter',
                     icon:'pi pi-fw pi-filter',
                     items:[
                        {
                           label:'Print',
                           icon:'pi pi-fw pi-print'
                        }
                     ]
                  },
                  {
                     icon:'pi pi-fw pi-bars',
                     label:'List'
                  }
               ]
            }
         ]
      },
      {
         label:'Events',
         icon:'pi pi-fw pi-calendar',
         items:[
            {
               label:'Edit',
               icon:'pi pi-fw pi-pencil',
               items:[
                  {
                     label:'Save',
                     icon:'pi pi-fw pi-calendar-plus'
                  },
                  {
                     label:'Delete',
                     icon:'pi pi-fw pi-calendar-minus'
                  },

               ]
            },
            {
               label:'Archieve',
               icon:'pi pi-fw pi-calendar-times',
               items:[
                  {
                     label:'Remove',
                     icon:'pi pi-fw pi-calendar-minus'
                  }
               ]
            }
         ]
      },
      {
         separator:true
      },
      {
         label:'Quit',
         icon:'pi pi-fw pi-power-off'
      }
  ];
  }

}
