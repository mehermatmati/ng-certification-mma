import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs"

const LOCATIONS : string = "locations";

@Injectable()
export class LocalStorageService {
    add(zipCode: number) {
        let zips = this.getAll();
        if(zips && zips.indexOf(zipCode)<0){
            zips.push(zipCode);
        }
        else if(!zips){
            zips = [zipCode];
        }
        localStorage.setItem(LOCATIONS, JSON.stringify(zips));
    }

    getAll(): number[] {
        let locString = localStorage.getItem(LOCATIONS);
        if(locString) {
            return JSON.parse(locString);
        }
        return [];
    }

    removeOne(zipCode : number) {
        let zips = this.getAll();
        localStorage.setItem(LOCATIONS, JSON.stringify(zips.filter(zip => zip != zipCode)));
    }

    removeAll() {
        localStorage.setItem(LOCATIONS, JSON.stringify([]));
    }
}
