import { BrowserRouter, Route, Routes } from "react-router-dom"
import Authentication from "./pages/Authentication"
import Landing from "./pages/Landing"
import Userrepository from "./pages/Userrepository"
import Singlevideorepo from "./pages/Singlevideorepo"


function App() {

  return (
    <>
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="/userrepository" element={<Userrepository />} />
            <Route path="/singlevideorepo" element={<Singlevideorepo />} />
          </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
