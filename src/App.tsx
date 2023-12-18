
import "./App.css"
import Buttons from "./components/Buttons/Buttons"
import Result from "./components/Result/Result"

const App = () => {
  return (

    <div className="bg-background w-[350px] h-3/5 rounded-[30px]">
      <Result/>
      <Buttons/>
    </div>

  )
}

export default App