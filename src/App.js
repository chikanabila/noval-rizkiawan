// Mengimpor gaya CSS dari './App.css'
import './App.css';
// Mengimpor komponen Routes, Browser Router, dan Route dari 'react-router-dom'
import { Routes, BrowserRouter, Route } from 'react-router-dom';
// Mengimpor komponen Input dari './pages/dashboard/Input'
import Input from './pages/dashboard/Input';
// Mengimpor komponen Home dari './pages/home/Home'
import Home from './pages/home/home';
import Tabel from './pages/dashboard/Tabel';
import Contact from './pages/dashboard/contact';

// Fungsi komponen utama App
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="login/dashboard" element={<Input />} />
        <Route path="Datafetch" element={<Tabel />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

// Mengekspor komponen App agar dapat digunakan di tempat lain dalam aplikasi
export default App;
