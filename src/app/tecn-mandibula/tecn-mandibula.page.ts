import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser"

@Component({
  selector: 'app-tecn-mandibula',
  templateUrl: './tecn-mandibula.page.html',
  styleUrls: ['./tecn-mandibula.page.scss'],
})
export class TecnMandibulaPage implements OnInit {

  public folder: string;
  vidUrl: SafeResourceUrl;
  constructor(private domSatizer:DomSanitizer) { }

    ngOnInit() {
      this.vidUrl=
      this.domSatizer.bypassSecurityTrustResourceUrl("https://redetuxnet.com.br/odonto/artigo4.pdf");
    }

}
