import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }

  transform(value: string, url: string): SafeResourceUrl {

    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}

/**
 * Segunda opcion, mas simple al no ocupar SafeResourceUrl
 * 
 *  import { Pipe, PipeTransform } from '@angular/core';
 * import { DomSanitizer } from "@angular/platform-browser";
 * 
 * @Pipe({
 *   name: 'domseguro'
 * })
 * export class DomseguroPipe implements PipeTransform {
 * 
 * constructor(private domSanitizer: DomSanitizer) { }
 * 
 * transform(value: string, url: string): any {
 * 
 *   return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
 * }
 * 
 * }
 */