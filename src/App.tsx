import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Blog from './pages/blog'

export default function App() {
  return (
    <BrowserRouter basename={`/`}>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/blog/*`} element={<Blog />} />
      </Routes>
    </BrowserRouter>
  )
}
