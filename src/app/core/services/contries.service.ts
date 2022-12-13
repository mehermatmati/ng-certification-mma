import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Country } from "../../shared/models/contry.model";

@Injectable()
export class CountryService {
    static URL ="https://restcountries.com"
    constructor(private http: HttpClient) { }

    getByName(needle: string) : Observable<Country[]> {
        return this.http.get<Country[]>(CountryService.URL+`/v2/name/${needle}`).pipe(
            map(data => data.filter(country => country.name.toUpperCase().includes(needle.toUpperCase())))
            );
    }
}
