import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Country } from "../../shared/models/contry.model";

@Injectable()
export class CountryService {
    static URL ="https://restcountries.com"
    constructor(private http: HttpClient) { }

    getByName(needle: string) : Observable<string[]> {
        return this.http.get<Country[]>(CountryService.URL+`/v2/name/${needle}`).pipe(
            map(data => data.map(country => country.name)),
            map(data => data.filter(name => name.toUpperCase().includes(needle.toUpperCase())))
            );
    }
}
