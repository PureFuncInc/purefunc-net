
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Blog from './pages/blog'
import Blog17 from './pages/blog17'
import Blog16 from './pages/blog16'
import Blog15 from './pages/blog15'
import Blog14 from './pages/blog14'
import Blog13 from './pages/blog13'
import Blog12 from './pages/blog12'
import Blog11 from './pages/blog11'
import Blog10 from './pages/blog10'
import Blog9 from './pages/blog9'
import Blog8 from './pages/blog8'
import Blog7 from './pages/blog7'
import Blog6 from './pages/blog6'
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
        <Route path={`/blog17`} element={<Blog17 />} />
        <Route path={`/blog16`} element={<Blog16 />} />
        <Route path={`/blog15`} element={<Blog15 />} />
        <Route path={`/blog14`} element={<Blog14 />} />
        <Route path={`/blog13`} element={<Blog13 />} />
        <Route path={`/blog12`} element={<Blog12 />} />
        <Route path={`/blog11`} element={<Blog11 />} />
        <Route path={`/blog10`} element={<Blog10 />} />
        <Route path={`/blog9`} element={<Blog9 />} />
        <Route path={`/blog8`} element={<Blog8 />} />
        <Route path={`/blog7`} element={<Blog7 />} />
        <Route path={`/blog6`} element={<Blog6 />} />
        <Route path={`/blog5`} element={<Blog5 />} />
        <Route path={`/blog4`} element={<Blog4 />} />
        <Route path={`/blog3`} element={<Blog3 />} />
        <Route path={`/blog2`} element={<Blog2 />} />
        <Route path={`/blog1`} element={<Blog1 />} />
      </Routes>
    </>
  )
}
