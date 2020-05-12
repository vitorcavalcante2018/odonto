import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser"

@Component({
  selector: 'app-tecn-maxila',
  templateUrl: './tecn-maxila.page.html',
  styleUrls: ['./tecn-maxila.page.scss'],
})
export class TecnMaxilaPage implements OnInit {

  public folder: string;
  vidUrl: SafeResourceUrl;
  constructor(private domSatizer:DomSanitizer) { }

    ngOnInit() {
      this.vidUrl=
      this.domSatizer.bypassSecurityTrustResourceUrl("https://s2.glbimg.com/fEGESP9MWt53d4dxlrZewiQXceg=/620x480/smart/e.glbimg.com/og/ed/f/original/2019/11/27/decoracao-com-girassol-curiosidades-sobre-o-girassol.jpg"); 
    }

}
