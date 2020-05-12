import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser"


@Component({
  selector: 'app-movie2',
  templateUrl: './movie2.page.html',
  styleUrls: ['./movie2.page.scss'],
})
export class Movie2Page implements OnInit {
  public folder: string;
  vidUrl: SafeResourceUrl;
  constructor(private activatedRoute: ActivatedRoute, private domSatizer:DomSanitizer) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.vidUrl=
    this.domSatizer.bypassSecurityTrustResourceUrl("https://redetuxnet.com.br/odonto/video/dente2.mp4");

  }

}
