import data from './data.json'
import { getTodayWeather } from './utils/getTodayWeather'

function App(): JSX.Element {
  // console.log(data)

  const todayWeather = getTodayWeather(data)
  console.log('🚀 ~ file: App.tsx:8 ~ App ~ todayWeather:', todayWeather)

  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  )
}

export default App
