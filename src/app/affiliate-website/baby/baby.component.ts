import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.css'],
})
export class BabyComponent implements OnInit {
  constructor() {}

  data = [
    {
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/NEW/D32463504_Slider_tile_dipers_set_final_01._CB650685915_.jpg',
      discription: 'Diapers & wipe',
    },
    {
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/Bathskincar/D32463504_Slider_tile_dipers_set_final_01_05_Beybee._CB628325514_.jpg',
      discription: 'Bath & skin Care',
    },
    {
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/NEW/D32463504_Slider_tile_dipers_set_final_04._CB650685915_.jpg',
      discription: 'Baby travel',
    },
    {
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/NEW/D32463504_Slider_tile_dipers_set_final_02._CB650685915_.jpg',
      discription: 'Bedding & nursry',
    },
    {
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/NEW/D32463504_Slider_tile_dipers_set_final_03._CB650685912_.jpg',
      discription: 'Last updated 3 mins ago',
    },
  ];

  diaper = [
    {
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/Bathskincar/D32463504_Slider_tile_bathskin_set_final_02_Sebamed._CB628325514_.jpg',
      discript: 'Diapers & wipes',
    },
    {
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/Bathskincar/D32463504_Slider_tile_bathskin_set_final_02._CB648337110_.jpg',
      discript: ' Bath & skin Care ',
    },
    {
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/Bathskincar/D32463504_Slider_tile_bathskin_set_final_01._CB648337110_.jpg',
      discript: 'Baby travel',
    },
    {
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/Bathskincar/D32463504_Slider_tile_bathskin_set_final_06._CB648337110_.jpg',
      discript: 'Bedding & nursry',
    },
    {
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/Bathskincar/D32463504_Slider_tile_bathskin_set_final_06._CB648337110_.jpg',
      discript: 'Last updated 3 mins ago',
    },
  ];

  babyProduct =
    'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/PrimeShoppingWeek/February/D39370445_Prime_Shopping_Deals_baby_R_1500x375.jpg';

  bedding = [
    {
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/Bedding/D32463504_Slider_tile_dipers_set_final_revisions_01_01._CB648337016_.jpg',
      discription: 'Diapers & wipes',
    },
    {
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/Bedding/D32463504_Slider_tile_dipers_set_final_revisions_01_04._CB648337016_.jpg',
      discription: 'Bath & skin Care',
    },
    {
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/Bedding/D32463504_Slider_tile_dipers_set_final_revisions_01_06._CB648337016_.jpg',
      discription: 'Baby travel',
    },
    {
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/Bedding/D32463504_Slider_tile_dipers_set_final_revisions_01_02._CB648337016_.jpg',
      discription: 'Bedding & nursry',
    },
    {
      image:
        'https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/NEW/2_bedding._CB628622193_.jpg',
      discription: 'Bedding & nursry',
    },
  ];

  wipe = [
    {
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/Set3/D32463504_Slider_tile_set_3_R2_1.jpg',
      discription: 'Diapers & wipes',
    },
    {
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/Set3/D32463504_Slider_tile_set_3_R2_2.jpg',
      discription: 'Bath & skin Care',
    },
    {
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/Set3/D32463504_Slider_tile_set_3_R2_4.jpg',
      discription: 'Baby travel',
    },
    {
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/Set3/D32463504_Slider_tile_set_3_R2_3.jpg',
      discription: 'Bedding & nursry',
    },
    {
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/Set3/D32463504_Slider_tile_set_3_R2_6.jpg',
      discription: 'Last updated 3 mins ago',
    },
  ];

  shopByAge = [
    {
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/ShopbyAge/FinalPC/ShopByAge-Baby_pc_final_01.jpg',
    },
    {
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/ShopbyAge/FinalPC/ShopByAge-Baby_pc_final_02.jpg',
    },
    {
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/ShopbyAge/FinalPC/ShopByAge-Baby_pc_final_03.jpg',
    },
    {
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/ShopbyAge/FinalPC/ShopByAge-Baby_pc_final_04.jpg',
    },
    {
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/ShopbyAge/FinalPC/ShopByAge-Baby_pc_final_05.jpg',
    },
  ];

  bestSeller = [
    {
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/SmallTiles/D32463504_Smalltiles_1.jpg',
    },
    {
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/SmallTiles/D32463504_Smalltiles_4_New.jpg',
    },
    {
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/SmallTiles/D32463504_Smalltiles_3_New.jpg',
    },
    {
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/SmallTiles/D32463504_Smalltiles_5.jpg',
    },
    {
      image:
        'https://images-eu.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/SmallTiles/D32463504_Smalltiles_2.jpg',
    },
  ];
  activity = [
    {
      last: 'Activity & Play Time',
    },
    {
      last: 'Baby Care',
    },
    {
      last: 'Baby Clothing',
    },
    {
      last: 'Baby safety',
    },
    {
      last: 'Baby shoes',
    },
    {
      last: 'Dedding furniture & room decor',
    },
    {
      last: 'Car Seats & Accessories',
    },
    {
      last: 'Carriers & Accessories',
    },
    {
      last: 'Diapering & Nappy',
    },

    {
      last: 'Changing',
    },
    {
      last: 'Feeding',
    },
    {
      last: 'Gift Packs',
    },
    {
      last: 'Maternity',
    },
    {
      last: 'Pacifiers & Teethers',
    },
    {
      last: 'Potty Training & Step Stools',
    },
    {
      last: 'Strollers, Buggies & Prams',
    },
  ];

  diapered = [
    {
      diaper: 'Diapering',
      discription:
        ' we are sorry, but this feature is currenty, unavailable please try again later',
    },
    {
      diaper: 'baby care',
      discription:
        ' we are sorry, but this feature is currenty, unavailable please try again later',
    },
    {
      diaper: 'Feeding',
      discription:
        'we are sorry, but this feature is currenty, unavailable please try again later',
    },
    {
      diaper: 'Activity & Entertainment',
      discription:
        'we are sorry, but this feature is currenty, unavailable please try again later',
    },
    {
      diaper: ' Bedding, Furniture & room decor',
      discription:
        'we are sorry, but this feature is currenty, unavailable please try again later',
    },
    {
      diaper: 'Potty Training',
      discription:
        'we are sorry, but this feature is currenty, unavailable please try again later',
    },
  ];
  ngOnInit(): void {}
}
