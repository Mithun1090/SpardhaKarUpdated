import { Component, OnInit } from '@angular/core';
import { faTwitter, faMailchimp, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter;
  faMailchimp = faMailchimp;
  faFacebook = faFacebook;
  constructor() { }

  ngOnInit(): void {
  }

}
