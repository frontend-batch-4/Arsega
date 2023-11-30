import { Routes, Route } from 'react-router-dom'
import Navbar from './component/navbar';
import Sidebar from './component/Sidebar';
import Footer from './component/footer';
import { useState } from 'react';
import Splide from '@splidejs/splide';

// PAGES
import Home from './pages/Home';
import Ttgkami from './pages/Ttgkami';
import Katalog from './pages/Katalog';
import Login from './pages/Login';
import FAQS from './pages/FAQS';
import Account from './pages/Account';
import Register from './pages/Register';
import Pemesanan from "./pages/Pemesanan";
import Pemesanan1 from './pages/Pemesanan1';
import Pemesanan2 from './pages/Pemesanan2';
import History from './pages/History';
import History2 from './pages/History2';
import Account2 from './pages/Account2';
// pages
// contoh cara import komponen 👇👇👇
// import NamaKomponen from './pages/NamaKomponen';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  // toggle sidebar
  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <>
      {/* Navigasi */}
      <Navbar kondisi={isSidebarOpen} toggleSidebar={handleSidebar} />
      <Sidebar kondisi={isSidebarOpen} toggleSidebar={handleSidebar} />




      {/* Routing */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/katalog' element={<Katalog />} />
        <Route path='/login' element={<Login />} />
        <Route path='/ttgkami' element={<Ttgkami />} />
        <Route path='/faqs' element={<FAQS />} />
        {/* routing register page */}
        <Route path='/register' element={<Register />} />
        <Route path='/account' element={<Account />} />
        {/* routing pemesanan */}
        <Route path='/pemesanan' element={<Pemesanan />} />
        <Route path='/pemesanan1' element={<Pemesanan1 />} />
        <Route path='/pemesanan2' element={<Pemesanan2 />} />
        <Route path='/history' element={<History />} />
        <Route path='/history2' element={<History2 />} />
        <Route path='/account2' element={<Account2 />} />

      </Routes>
      <Footer />
      {/* FOOTER */}
    </>
  );
}