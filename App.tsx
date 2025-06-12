import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import VendorList from './pages/VendorList'
import VendorProfile from './pages/VendorProfile'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="vendors" element={<VendorList />} />
        <Route path="vendors/:id" element={<VendorProfile />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App 