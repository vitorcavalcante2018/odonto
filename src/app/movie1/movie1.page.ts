import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser"


@Component({
  selector: 'app-movie1',
  templateUrl: './movie1.page.html',
  styleUrls: ['./movie1.page.scss'],
})
export class Movie1Page implements OnInit {
  public folder: string;
  vidUrl: SafeResourceUrl;
  constructor(private activatedRoute: ActivatedRoute, private domSatizer:DomSanitizer) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.vidUrl=
    this.domSatizer.bypassSecurityTrustResourceUrl("https://redetuxnet.com.br/odonto/video/dentes.mp4");

  }

}
