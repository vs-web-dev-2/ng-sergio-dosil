import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecleo',
  templateUrl: './tecleo.component.html',
  styleUrls: ['./tecleo.component.css'],
})
export class TecleoComponent implements OnInit {
  public frase = 'En un lugar de la mancha';
  public mensaje = 'Esperando';
  public loTecleado = 'Haz click en empezar';

  private inicio = Date.now();
  private haTerminado = false;

  constructor() {}

  ngOnInit(): void {}

  public empezar() {
    console.log('Click en empezar');
    this.mensaje = 'Vamos allá';
    this.inicio = Date.now();
    this.loTecleado = '';
    this.haTerminado = false;
  }

  public onInput() {
    if (this.haTerminado) return;
    const ahora = Date.now();
    let tiempo = (ahora - this.inicio) / 1000;
    if (this.frase === this.loTecleado) {
      this.mensaje = 'Enhorabuena, has tardado ' + tiempo;
      this.haTerminado = true;
    } else if (this.frase.startsWith(this.loTecleado)) {
      this.mensaje = 'Vas bien ' + tiempo;
    } else {
      this.mensaje = 'Vas mal ' + tiempo;
    }
  }
}
