const ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';

export class WeatherUtils {

  static getWeatherIcon(id: number): string{
    if (id >= 200 && id <= 232)
      {return ICON_URL + "art_storm.png";}
    else if (id >= 501 && id <= 511)
      {return ICON_URL + "art_rain.png";}
    else if (id === 500 || (id >= 520 && id <= 531))
      {return ICON_URL + "art_light_rain.png";}
    else if (id >= 600 && id <= 622)
      {return ICON_URL + "art_snow.png";}
    else if (id >= 801 && id <= 804)
      {return ICON_URL + "art_clouds.png";}
    else if (id === 741 || id === 761)
      {return ICON_URL + "art_fog.png";}
    else
      {return ICON_URL + "art_clear.png";}
  }
}
