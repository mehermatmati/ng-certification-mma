import { City } from "./city.model";
import { DailyForecastElement } from "./daily-forecast-element.model";
import { Temp } from "./temp.model";
import { Weather } from "./weather.model";

export interface DailyForecast {
  city: City;
  list: DailyForecastElement[];
}
