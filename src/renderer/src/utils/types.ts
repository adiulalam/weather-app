export interface CleanedTodayWeatherType {
  time: string
  temp: number
  rain_chance: number
}
export interface TodayWeatherType {
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
