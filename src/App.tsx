import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";

import { Home } from './pages/home/Home.tsx'
import { Change } from './pages/change/Change.tsx';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/change" element={ <Change />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
