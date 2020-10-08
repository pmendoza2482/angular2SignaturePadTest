import { Component, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('signatureCanvas', {static: true}) signaturePad: SignaturePad;

  private signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'backgroundColor': '#ffffff',
    'canvasWidth': 500,
    'canvasHeight': 300
  };

  constructor() {}

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
   // console.log(this.signaturePad.toDataURL());

  }

  clear(){

    this.signaturePad.clear();
  }

}
