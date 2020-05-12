import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser"

@Component({
  selector: 'app-pdf2',
  templateUrl: './pdf2.page.html',
  styleUrls: ['./pdf2.page.scss'],
})
export class Pdf2Page implements OnInit {
public folder: string;
vidUrl: SafeResourceUrl;
constructor(private domSatizer:DomSanitizer) { }

  ngOnInit() {
    this.vidUrl=
    this.domSatizer.bypassSecurityTrustResourceUrl("https://redetuxnet.com.br/odonto/artigo2.pdf");
  }

}
