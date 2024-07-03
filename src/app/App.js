"use client";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from '/navbar';
import React from 'react';
import Link from 'next/link';

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
