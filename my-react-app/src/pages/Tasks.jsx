import { useEffect, useState } from 'react'

function Tasks() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadTasks() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        if (!response.ok) throw new Error(`Request failed (${response.status})`)
        setTasks(await response.json())
      } catch (fetchError) {
        setError(fetchError instanceof Error ? fetchError.message : 'Could not load tasks')
      } finally {
        setLoading(false)
      }
    }

    loadTasks()
  }, [])

  return (
    <section>
      <p className="eyebrow">YOUR WORKSPACE</p>
      <h1>Tasks</h1>
      <p className="subheading">Your tasks from JSONPlaceholder.</p>
      <div className="table-wrap">
        {loading ? <p className="message">Loading tasks…</p> : error ? (
          <p className="message error" role="alert">{error}</p>
        ) : (
          <table>
            <thead><tr><th>ID</th><th>Task title</th><th>Status</th></tr></thead>
            <tbody>
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.title}</td>
                  <td><span className={task.completed ? 'completed' : 'pending'}>
                    {task.completed ? 'Completed' : 'Pending'}
                  </span></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  )
}

export default Tasks
