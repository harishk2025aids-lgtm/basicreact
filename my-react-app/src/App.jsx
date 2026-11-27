import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './component/Layout'
import Home from './pages/Home'
import Tasks from './pages/Tasks'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
