import { Component, OnInit } from '@angular/core';
  @Component({
  selector: 'app-giftcards',
  templateUrl: './giftcards.component.html',
  styleUrls: ['./giftcards.component.css']
})
export class GiftcardsComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
  }

  myFun(){
    console.log("hii this is a submit button")
  }

}
