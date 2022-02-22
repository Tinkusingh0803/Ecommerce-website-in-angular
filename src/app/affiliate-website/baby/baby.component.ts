import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-baby',
  templateUrl: './baby.component.html',
  styleUrls: ['./baby.component.css']
})
export class BabyComponent implements OnInit {

  constructor() { }

data= [
  {
     "image": "https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/NEW/D32463504_Slider_tile_dipers_set_final_01._CB650685915_.jpg",
     "discription": "Diapers & wipe"

  },
  {
    "image": "https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/Bathskincar/D32463504_Slider_tile_dipers_set_final_01_05_Beybee._CB628325514_.jpg",
    "discription": "Bath & skin Care"

 },
 {
  "image": "https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/NEW/D32463504_Slider_tile_dipers_set_final_04._CB650685915_.jpg",
  "discription": "Baby travel"

},
{
  "image": "https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/NEW/D32463504_Slider_tile_dipers_set_final_02._CB650685915_.jpg",
  "discription": "Bedding & nursry"

}, {
  "image": "https://images-na.ssl-images-amazon.com/images/G/31/img19/Baby/FNovember/BabyStore/NEW/D32463504_Slider_tile_dipers_set_final_03._CB650685912_.jpg",
  "discription": "Last updated 3 mins ago"

}
]

  ngOnInit(): void {

  }



}
