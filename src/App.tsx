import { Route, Routes } from "react-router-dom"
import Static from "./pages/Static"

function App() {


  return (
    <Routes>
      <Route path="/" element={<Static />} />
    </Routes>
  )
}

export default App
