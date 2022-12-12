import { Pipe, PipeTransform, SecurityContext } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "boldSpan",
  pure: false,
})
export class BoldSpanPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string, regex: string): any {
    return this.sanitize(this.replace(value, regex));
  }

  replace(str: string, regex: string) {
    if (str) {
      return str.replace(new RegExp(`(${regex})`, "gi"), "<b>$1</b>");
    } else {
      return "";
    }
  }

  sanitize(str: string) {
    return this.sanitizer.sanitize(SecurityContext.HTML, str);
  }
}
