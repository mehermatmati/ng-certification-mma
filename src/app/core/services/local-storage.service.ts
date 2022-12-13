import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs"
import { LocalStorageElement } from "src/app/shared/models/local-storage-element.model";

const LOCATIONS : string = "locations";

@Injectable()
export class LocalStorageService {
    add(item: LocalStorageElement) {
        let elements = this.getAll();
        if(!this.checkIfElementExist(item)){
            elements.push(item);
        }
        else if(!this.checkIfNotEmpty()){
            elements = [item];
        }
        localStorage.setItem(LOCATIONS, JSON.stringify(elements));
    }

    getAll(): LocalStorageElement[] {
        let locString = localStorage.getItem(LOCATIONS);
        if(locString) {
            return JSON.parse(locString);
        }
        return [];
    }

    removeOne(element : LocalStorageElement) {
        let zips = this.getAll();
        localStorage.setItem(LOCATIONS, JSON.stringify(zips.filter(item => item.iso!=element.iso || item.zip!=element.zip)));
    }

    removeAll() {
        localStorage.setItem(LOCATIONS, JSON.stringify([]));
    }

    checkIfElementExist(element: LocalStorageElement): boolean{
        let elements = this.getAll();
        return elements?.filter(item => item.zip == element.zip && item.iso == element.iso).length>0;
    }

     checkIfNotEmpty(): boolean {
        return this.getAll() && this.getAll().length>0;
     }
}
