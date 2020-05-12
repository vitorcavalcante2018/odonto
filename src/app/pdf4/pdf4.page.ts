import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser"

@Component({
  selector: 'app-pdf4',
  templateUrl: './pdf4.page.html',
  styleUrls: ['./pdf4.page.scss'],
})
export class Pdf4Page implements OnInit {
public folder: string;
vidUrl: SafeResourceUrl;
constructor(private domSatizer:DomSanitizer) { }

  ngOnInit() {
    this.vidUrl=
    this.domSatizer.bypassSecurityTrustResourceUrl("https://redetuxnet.com.br/odonto/artigo4.pdf");
  }

}
