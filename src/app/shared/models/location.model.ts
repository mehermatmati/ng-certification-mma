import { LocationData } from "./location-data.model";

export interface Location {
  zip : number;
  iso : string | null;
  data : LocationData
}
