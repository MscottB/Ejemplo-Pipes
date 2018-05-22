import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//components
import { AppComponent } from './app.component';
//i18n
import { LOCALE_ID } from '@angular/core';
import localeEsCl from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common';
import localeEsClExtra from '@angular/common/locales/extra/es-CL';
registerLocaleData(localeEsCl, 'es-CL', localeEsClExtra);
//pipes
import { capitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';





@NgModule({
  declarations: [
    AppComponent,
    capitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CL' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
