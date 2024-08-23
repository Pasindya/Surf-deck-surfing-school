import {BrowserRouter,Routes,Route} from 'react-dom';
import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Packages from './pages/Packages';
import Staff from './pages/Staff';
import Event from './pages/Event';
import Equipment from './pages/Equipment';
import Payments from './pages/Payments';
import Supplier from './pages/Supplier';
import Profile from './pages/Profile';

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<Aboutus />} />
    <Route path="/Packages" element={<Packages />} />
    <Route path="/Staff" element={<Staff />} />
    <Route path="/Event" element={<Event />} />
    <Route path="/Equipment" element={<Equipment />} />
    <Route path="/Payments" element={<Payments />} />
    <Route path="/Supplier" element={<Supplier />} />
    <Route path="/Profile" element={<Profile />} />
    

  </Routes>

  </BrowserRouter>;
}
