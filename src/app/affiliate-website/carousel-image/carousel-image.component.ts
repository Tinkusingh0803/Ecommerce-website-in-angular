import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-image',
  templateUrl: './carousel-image.component.html',
  styleUrls: ['./carousel-image.component.css']
})
export class CarouselImageComponent implements OnInit {

    carousel=[
      {
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Aug21_ART/Vivo_Updated2/Amazon_GRD_DesktopTemplate_1500x600-Wireless.psd._CB645459230_.jpg",
    img1: "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/AugART21/GW/NEW/HERO/PCshopnow/AugART21_PC_hero_1x_Shopnow._CB645150438_.jpg",
    img2: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL_HMT/PCAUGART/Hero_1_1500x600._CB645428001_.jpg",
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
  constructor() { }

  ngOnInit(): void {
  }

}
