import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-image',
  templateUrl: './cards-image.component.html',
  styleUrls: ['./cards-image.component.css']
})
export class CardsImageComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

}
