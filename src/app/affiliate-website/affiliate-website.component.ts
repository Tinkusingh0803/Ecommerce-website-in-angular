import { Component, OnInit , HostListener} from '@angular/core';

@Component({
  selector: 'app-affiliate-website',
  templateUrl: './affiliate-website.component.html',
  styleUrls: ['./affiliate-website.component.css']
})
export class AffiliateWebsiteComponent implements OnInit {
  showScroll:any ;
  showScrollHeight = 300;
  hideScrollHeight = 10;

  constructor() { }
  @HostListener('window:scroll', [])


  ngOnInit(): void {
  }
  onWindowScroll()
  {
    if (( window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) > this.showScrollHeight)
    {
        this.showScroll = true;
    }
    else if ( this.showScroll && (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) < this.hideScrollHeight)
    {
      this.showScroll = false;
    }
  }
  scrollToTop()
  {
    (function smoothscroll()
    { var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      if (currentScroll > 0)
      {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }

}
