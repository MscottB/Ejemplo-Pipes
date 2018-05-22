import { Component } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activar: boolean = true;

  nombre = "Michael";

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  porcentaje = 0.1234567;

  moneda = 1234.567;

  Jsonn = {
    nombre: "Michael",
    apellido: "Scott",
    edad: "100",
    direccion: {
      calle: "Portugal",
      casa: "200"
    }
  }
  //AsyncPipe
  Promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('LLego la informacion correctamente'), 3500);
  })

  fecha = new Date();


  textoCodigo = `
                import { LOCALE_ID } from '@angular/core';
                import localeEs from '@angular/common/locales/es';
                import { registerLocaleData } from '@angular/common';
                registerLocaleData(localeEs);

                providers: [{ provide: LOCALE_ID, useValue: 'es-CL' }]
`;

  PipePersonalizado1 = 'miCHael scoTT bRAvo';

  VideoYoutube = "ALZHF5UqnU4";

  contraseña = "Scott";


}
