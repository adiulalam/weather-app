function App(): JSX.Element {
  console.log(import.meta.env)
  return (
    <div className="container">
      <h1 className="text-3xl font-bold underline">
        {import.meta.env.RENDERER_VITE_API_KEY} Hello world!
      </h1>
    </div>
  )
}

export default App
