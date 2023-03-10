import _ from 'lodash'
import { CleanedTodayWeatherType, TodayWeatherType } from './types'

export const getTodayWeather = (data: TodayWeatherType): CleanedTodayWeatherType[] => {
  const currentHour = new Date().getHours()
  const time = data.hourly.time.slice(currentHour)
  const precipitation_probability = data.hourly.precipitation_probability.slice(currentHour)
  const temperature_2m = data.hourly.temperature_2m.slice(currentHour)

  const todayWeather: CleanedTodayWeatherType[] = []

  for (let i = 0; i < time.length; i++) {
    todayWeather.push({
      time: time[i],
      temp: temperature_2m[i],
      rain_chance: precipitation_probability[i]
    })
  }

  return _.orderBy(todayWeather, ['time'], ['asc'])
}
