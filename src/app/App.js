"use client";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from '/navbar';
import React from 'react';
import Link from 'next/link';
// import Home from '/pages/home';
// import Shopping from '/pages/shopping';
// import Profile from '/pages/profile';
// import Cart from '/pages/cart';
// import 'index.css';

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/shopping" element={<Shopping />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default function App() {
  return(
    <div>
      <Link href="/home">Home</Link>
      <Link href="/shopping">Shopping</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/cart">Cart</Link>
    </div>
  )
}
