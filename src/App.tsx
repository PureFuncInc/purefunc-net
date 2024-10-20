import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Blog from './pages/blog'
import Blog25 from './pages/blog25'
import Blog24 from './pages/blog24'
import Blog19 from './pages/blog19'
import Blog13 from './pages/blog13'
import Blog8 from './pages/blog8'
import Blog7 from './pages/blog7'
import Blog5 from './pages/blog5'
import Blog4 from './pages/blog4'
import Blog3 from './pages/blog3'
import Blog2 from './pages/blog2'
import Blog1 from './pages/blog1'

export default function App() {
  return (
    <>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/blog`} element={<Blog />} />
        <Route path={`/blog/25`} element={<Blog25 />} />
        <Route path={`/blog/24`} element={<Blog24 />} />
        <Route path={`/blog/19`} element={<Blog19 />} />
        <Route path={`/blog/13`} element={<Blog13 />} />
        <Route path={`/blog/8`} element={<Blog8 />} />
        <Route path={`/blog/7`} element={<Blog7 />} />
        <Route path={`/blog/5`} element={<Blog5 />} />
        <Route path={`/blog/4`} element={<Blog4 />} />
        <Route path={`/blog/3`} element={<Blog3 />} />
        <Route path={`/blog/2`} element={<Blog2 />} />
        <Route path={`/blog/1`} element={<Blog1 />} />
      </Routes>
    </>
  )
}
