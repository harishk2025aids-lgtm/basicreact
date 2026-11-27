import { House, ListTodo } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="brand">Task workspace</h2>
        <nav aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            <House size={18} /> Home
          </NavLink>
          <NavLink to="/tasks" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            <ListTodo size={18} /> Tasks
          </NavLink>
        </nav>
      </aside>
      <main className="content"><Outlet /></main>
    </div>
  )
}

export default Layout
