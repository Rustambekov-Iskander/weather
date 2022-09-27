interface weather {
  id: number;
  main: string;
  description: string;
  icon: string
}

interface main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}

interface wind {
  speed: number;
  deg: number;
  gust: number
}

interface sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface IWeather {
  coord: {lon: number, lat: number};
  weather: weather[];
  base: string;
  main: main;
  visibility: number;
  wind: wind;
  clouds: {all: number};
  dt: number;
  sys: sys;
  timezone: number;
  id: number;
  name: string;
  cod: number
}