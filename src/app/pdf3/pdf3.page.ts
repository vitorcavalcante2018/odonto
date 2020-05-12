import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser"

@Component({
  selector: 'app-pdf3',
  templateUrl: './pdf3.page.html',
  styleUrls: ['./pdf3.page.scss'],
})
export class Pdf3Page implements OnInit {
public folder: string;
vidUrl: SafeResourceUrl;
constructor(private domSatizer:DomSanitizer) { }

  ngOnInit() {
    this.vidUrl=
    this.domSatizer.bypassSecurityTrustResourceUrl("https://redetuxnet.com.br/odonto/artigo3.pdf");
  }

}
