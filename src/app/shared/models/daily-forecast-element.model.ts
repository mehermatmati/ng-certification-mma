import { Temp } from "./temp.model";
import { Weather } from "./weather.model";

export interface DailyForecastElement {
  weather: Weather[]
  temp: TempForcast;
  dt: number;
}

interface TempForcast {
  min: number;
  max: number;
}
