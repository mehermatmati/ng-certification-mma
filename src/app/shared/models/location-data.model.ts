import { Temp } from "./temp.model";
import { Weather } from "./weather.model";

export interface LocationData {
  name: string;
  weather: Weather[];
  main: Temp;
}
