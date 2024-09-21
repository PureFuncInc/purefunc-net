
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Blog from './pages/blog'
import Blog60 from './pages/blog60'
import Blog59 from './pages/blog59'
import Blog58 from './pages/blog58'
import Blog57 from './pages/blog57'
import Blog56 from './pages/blog56'
import Blog55 from './pages/blog55'
import Blog54 from './pages/blog54'
import Blog53 from './pages/blog53'
import Blog52 from './pages/blog52'
import Blog51 from './pages/blog51'
import Blog50 from './pages/blog50'
import Blog49 from './pages/blog49'
import Blog48 from './pages/blog48'
import Blog47 from './pages/blog47'
import Blog46 from './pages/blog46'
import Blog45 from './pages/blog45'
import Blog44 from './pages/blog44'
import Blog43 from './pages/blog43'
import Blog42 from './pages/blog42'
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

export default function App() {
  return (
    <>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/blog`} element={<Blog />} />
        <Route path={`/blog/60`} element={<Blog60 />} />
        <Route path={`/blog/59`} element={<Blog59 />} />
        <Route path={`/blog/58`} element={<Blog58 />} />
        <Route path={`/blog/57`} element={<Blog57 />} />
        <Route path={`/blog/56`} element={<Blog56 />} />
        <Route path={`/blog/55`} element={<Blog55 />} />
        <Route path={`/blog/54`} element={<Blog54 />} />
        <Route path={`/blog/53`} element={<Blog53 />} />
        <Route path={`/blog/52`} element={<Blog52 />} />
        <Route path={`/blog/51`} element={<Blog51 />} />
        <Route path={`/blog/50`} element={<Blog50 />} />
        <Route path={`/blog/49`} element={<Blog49 />} />
        <Route path={`/blog/48`} element={<Blog48 />} />
        <Route path={`/blog/47`} element={<Blog47 />} />
        <Route path={`/blog/46`} element={<Blog46 />} />
        <Route path={`/blog/45`} element={<Blog45 />} />
        <Route path={`/blog/44`} element={<Blog44 />} />
        <Route path={`/blog/43`} element={<Blog43 />} />
        <Route path={`/blog/42`} element={<Blog42 />} />
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
      </Routes>
    </>
  )
}
