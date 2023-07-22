import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Services from "./components/Services"
import Kontakt from "./components/Kontakt"
import UserProfil from "./components/UserProfil"
import NotFound from "./components/NotFound"
import NavBar from "./components/NavBar"
import Analytics from "./Pages/Analytics/Analytics"
import Developmnt from "./Pages/Analytics/Developmnt"
import CyberSecurity from "./Pages/Analytics/CyberSecurity"
import Uiux from "./Pages/Analytics/Uiux"

const App = () => {
  return (
    <>
       <BrowserRouter>
         <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<Kontakt/>} />
            <Route path="/profile/:id" element={<UserProfil/>} />
            <Route path="/analytics" element={<Analytics/>}>
                <Route path="/analytics/developmnt" element={<Developmnt/>} />
                <Route path="/analytics/cybersecurity" element={<CyberSecurity/>} />
                <Route path="/analytics/uiux" element={<Uiux/>} />
              </Route>
            <Route path="*" element={<NotFound/>} />
          </Routes>
       </BrowserRouter>
    </>
  )
}
export default App
