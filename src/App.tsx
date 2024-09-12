
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Blog from './pages/blog'
import Blog41 from './pages/blog41'
import Blog40 from './pages/blog40'
import Blog39 from './pages/blog39'
import Blog38 from './pages/blog38'
import Blog37 from './pages/blog37'
import Blog36 from './pages/blog36'
import Blog35 from './pages/blog35'
import Blog34 from './pages/blog34'
import Blog33 from './pages/blog33'
import Blog32 from './pages/blog32'
import Blog31 from './pages/blog31'
import Blog30 from './pages/blog30'
import Blog29 from './pages/blog29'
import Blog28 from './pages/blog28'
import Blog27 from './pages/blog27'
import Blog26 from './pages/blog26'
import Blog25 from './pages/blog25'
import Blog24 from './pages/blog24'
import Blog23 from './pages/blog23'
import Blog22 from './pages/blog22'
import Blog21 from './pages/blog21'
import Blog20 from './pages/blog20'
import Blog19 from './pages/blog19'
import Blog18 from './pages/blog18'
import Blog17 from './pages/blog17'
import Blog16 from './pages/blog16'
import Blog15 from './pages/blog15'
import Blog14 from './pages/blog14'
import Blog13 from './pages/blog13'
import Blog12 from './pages/blog12'

export default function App() {
  return (
    <>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/blog`} element={<Blog />} />
        <Route path={`/blog/41`} element={<Blog41 />} />
        <Route path={`/blog/40`} element={<Blog40 />} />
        <Route path={`/blog/39`} element={<Blog39 />} />
        <Route path={`/blog/38`} element={<Blog38 />} />
        <Route path={`/blog/37`} element={<Blog37 />} />
        <Route path={`/blog/36`} element={<Blog36 />} />
        <Route path={`/blog/35`} element={<Blog35 />} />
        <Route path={`/blog/34`} element={<Blog34 />} />
        <Route path={`/blog/33`} element={<Blog33 />} />
        <Route path={`/blog/32`} element={<Blog32 />} />
        <Route path={`/blog/31`} element={<Blog31 />} />
        <Route path={`/blog/30`} element={<Blog30 />} />
        <Route path={`/blog/29`} element={<Blog29 />} />
        <Route path={`/blog/28`} element={<Blog28 />} />
        <Route path={`/blog/27`} element={<Blog27 />} />
        <Route path={`/blog/26`} element={<Blog26 />} />
        <Route path={`/blog/25`} element={<Blog25 />} />
        <Route path={`/blog/24`} element={<Blog24 />} />
        <Route path={`/blog/23`} element={<Blog23 />} />
        <Route path={`/blog/22`} element={<Blog22 />} />
        <Route path={`/blog/21`} element={<Blog21 />} />
        <Route path={`/blog/20`} element={<Blog20 />} />
        <Route path={`/blog/19`} element={<Blog19 />} />
        <Route path={`/blog/18`} element={<Blog18 />} />
        <Route path={`/blog/17`} element={<Blog17 />} />
        <Route path={`/blog/16`} element={<Blog16 />} />
        <Route path={`/blog/15`} element={<Blog15 />} />
        <Route path={`/blog/14`} element={<Blog14 />} />
        <Route path={`/blog/13`} element={<Blog13 />} />
        <Route path={`/blog/12`} element={<Blog12 />} />
      </Routes>
    </>
  )
}
