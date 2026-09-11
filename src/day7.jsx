import { useState } from "react"
import TaskList from "./TaskList"

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  function addTask() {
    if (task.trim() === "") return

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    }

    setTasks([...tasks, newTask])
    setTask("")
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-10">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96">

        <h1 className="text-3xl font-bold text-purple-600 text-center mb-5">
          Task Tracker
        </h1>

        <div className="flex gap-2">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
            className="border p-2 rounded-lg flex-1"
          />

          <button
            onClick={addTask}
            className="bg-purple-600 text-white px-4 rounded-lg"
          >
            Add
          </button>
        </div>

        <div className="mt-5">
          <TaskList
            tasks={tasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        </div>

      </div>
    </div>
  )
}

export default App