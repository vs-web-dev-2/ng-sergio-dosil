import { Component, OnInit } from '@angular/core';
import { FrankfurterService } from './frankfurter.service';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css'],
})
export class DivisasComponent implements OnInit {
  public fecha: Date = new Date();
  public cotizaciones: any[] = [];
  public cargado: boolean = false;

  constructor(frank: FrankfurterService) {
    frank.obtenerCotizaciones$().subscribe({
      next: (body: any) => {
        this.fecha = new Date(body.date);
        const rates: any = body.rates;
        Object.keys(rates).forEach((key) => {
          this.cotizaciones.push({
            divisa: key,
            contravalor: rates[key],
          });
        });
        this.cargado = true;
      },
    });
  }

  ngOnInit(): void {}
}
