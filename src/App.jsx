import Navbar from "./components/navbar/Navbar";
import DestinationPage from "./pages/destinationpage/DestinationPage";
import LandingPage from "./pages/landingpage/LandingPage";
import TripTypesPage from "./pages/triptypespage/TripTypesPage"
import ContactUs from "./pages/contactuspage/ContactUsPage"
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/destination" element={<DestinationPage/>}/>
      <Route path="/trips" element={<TripTypesPage/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}