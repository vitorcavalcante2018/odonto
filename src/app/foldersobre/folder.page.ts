import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser"


@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  vidUrl: SafeResourceUrl;
  constructor(private activatedRoute: ActivatedRoute, private domSatizer:DomSanitizer) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.vidUrl=
    this.domSatizer.bypassSecurityTrustResourceUrl("https://i.pinimg.com/originals/fd/3c/cd/fd3ccd7b49e366b4206f5ac7f8fa8dac.gif");

  }

}
