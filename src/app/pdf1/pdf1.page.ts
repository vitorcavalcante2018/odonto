import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser"

@Component({
  selector: 'app-pdf1',
  templateUrl: './pdf1.page.html',
  styleUrls: ['./pdf1.page.scss'],
})
export class Pdf1Page implements OnInit {
public folder: string;
vidUrl: SafeResourceUrl;
constructor(private domSatizer:DomSanitizer) { }

  ngOnInit() {
    this.vidUrl=
    this.domSatizer.bypassSecurityTrustResourceUrl("https://redetuxnet.com.br/odonto/artigo1.pdf");
  }

}
