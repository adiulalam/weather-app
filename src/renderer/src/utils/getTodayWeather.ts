import _ from 'lodash'

export const getTodayWeather = (data: Weather): TodayWeatherType[] => {
  const currentHour = new Date().getHours()
  const time = data.hourly.time.slice(currentHour)
  const precipitation_probability = data.hourly.precipitation_probability.slice(currentHour)
  const temperature_2m = data.hourly.temperature_2m.slice(currentHour)

  const todayWeather: TodayWeatherType[] = []

  for (let i = 0; i < time.length; i++) {
    todayWeather.push({
      time: time[i],
      temp: temperature_2m[i],
      rain_chance: precipitation_probability[i]
    })
  }

  return _.orderBy(todayWeather, ['time'], ['asc'])
}

export interface TodayWeatherType {
  time: string
  temp: number
  rain_chance: number
}

export interface Weather {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  hourly_units: HourlyUnits
  hourly: Hourly
}
export interface HourlyUnits {
  time: string
  temperature_2m: string
  precipitation_probability: string
}
export interface Hourly {
  time: string[]
  temperature_2m: number[]
  precipitation_probability: number[]
}
