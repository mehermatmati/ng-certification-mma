import { Pipe, PipeTransform, SecurityContext } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "tempSpan",
  pure: false,
})
export class TempSpanPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(temp: number): any {
    return this.sanitize(this.replace(temp));
  }

  replace(temp: number) {
    let cssClass = this.getClass(temp);
    return `<span class="${cssClass}">${temp?.toFixed()}</span>`;
  }

  sanitize(str: string) {
    return this.sanitizer.sanitize(SecurityContext.HTML, str);
  }

  getClass(temp: number) : string {
   if(temp>70) {
    return 'hot';
   }
   else if(temp<40) {
    return 'cold';
   }
   else
   return 'regular';
  }
}
