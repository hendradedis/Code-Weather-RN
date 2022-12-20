export interface IWeather {
  coord?: ICordinat;
  weather: IWeatherMain[];
  base?: string;
  main?: IMainContent;
  visibility: number;
  wind: IWind;
  clouds: IClouds;
  dt: number;
  sys: ISyc;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface ICordinat {
  lon?: number;
  lat?: number;
}

export interface IWeatherMain {
  id: number;
  main?: string;
  description?: string;
  icon?: string;
}

export interface IMainContent {
  temp?: number;
  feels_like?: number;
  temp_min?: number;
  temp_max?: number;
  pressure?: number;
  humidity?: number;
  sea_level?: number;
  grnd_level?: number;
}

export interface IWind {
  speed?: number;
  deg?: number;
  gust?: number;
}

export interface IClouds {
  all?: number;
}

export interface ISyc {
  country?: string;
  sunrise: number;
  sunset: number;
}
