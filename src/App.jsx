import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import TermsCondition from './pages/Term&C/Term&C';
import Login from './components/Login/Login';
import Servicing from './pages/Servicing/Servicing';
import Detailing from './pages/Detailing/Detailing';
import PrivacyPolicy from './pages/Privacy&Policy/Privacy&Policy';
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/TermsCondition' element={<TermsCondition />} />
        <Route path='/PrivacyPolicies' element={<PrivacyPolicy/>} />
        <Route path='/RefundPolicy' element={<RefundPolicy/>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Service' element={<Servicing/>} />
        <Route path='/Detail' element={<Detailing/>} />

      </Routes>
    </Router>
  )
}

export default App
