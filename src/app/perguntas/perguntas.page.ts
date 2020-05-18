import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perguntas',
  templateUrl: './perguntas.page.html',
  styleUrls: ['./perguntas.page.scss'],
})
export class PerguntasPage implements OnInit {

  lista=[];

  constructor(public navCtrl: NavController) {
    this.lista=[
      {anestesia:"Lidocaina2%",    dosemax:"4,4 mg", tubetes:" 7",       maxabsoluto:"300 mg"},
      {anestesia:"Lidcaina_3%",     dosemax:"4,4 mg", tubetes:"4 e meio", maxabsoluto:"300 mg"},
      {anestesia:"Mepivacaina 2%",  dosemax:"4,4 mg", tubetes:" 7",       maxabsoluto:"300 mg"},
      {anestesia:"Mepivacaina 3%",  dosemax:"4,4 mg", tubetes:"4 e meio", maxabsoluto:"300 mg"},
      {anestesia:"Articaína_0%",       dosemax:"7 mg",   tubetes:"5 e meio", maxabsoluto:"500 mg"},
      {anestesia:"Prilocaina3%",   dosemax:"6 mg",   tubetes:"6 e meio", maxabsoluto: "400 mg"},
      {anestesia:"Bupivacaina 0,5%",dosemax:"1,3 mg", tubetes:"8 e meio", maxabsoluto: "90 mg"},
    ];
  }


  ngOnInit() {
  }

}
