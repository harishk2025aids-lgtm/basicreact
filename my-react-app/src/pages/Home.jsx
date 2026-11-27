import { Link } from 'react-router-dom'

function Home() {
  return (
    <section>
      <p className="eyebrow">HOME</p>
      <h1>Welcome to your workspace</h1>
      <p className="subheading">Keep your day organized and see what needs to get done.</p>
      <Link className="button" to="/tasks">View tasks</Link>
    </section>
  )
}

export default Home
