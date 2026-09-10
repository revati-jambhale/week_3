import { useState } from "react"

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  function addTask() {
    if (task.trim() === "") return

    setTasks([...tasks, task])
    setTask("")
  }

  function deleteTask(index) {
    setTasks(tasks.filter((_, i) => i !== index))
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

        <ul className="mt-5">
          {tasks.map((item, index) => (
            <li
              key={index}
              className="flex justify-between bg-gray-100 p-3 mb-2 rounded-lg"
            >
              <span>{item}</span>

              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 font-bold"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

      </div>
    </div>
  )
}

export default App
