import ListHeader from "./components/listHeader";
import ListItem from "./components/listItem";
import { useEffect, useState } from "react";

const Appt = ({ setSortedTasks }) => {
  const [tasks, setTasks] = useState(null); // State to store tasks

  // Function to fetch tasks from backend
  const getData = async () => {
    const userEmail = "jane.smith@example.com"; // Replace with actual user email
    try {
      const response = await fetch(`http://localhost:3000/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json); // Update state with fetched tasks
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData(); // Fetch tasks when component mounts
  }, []);

  console.log(tasks); // Log fetched tasks

  // Sort tasks by date
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date));

  useEffect(() => {
    if (sortedTasks) {
      setSortedTasks(sortedTasks); // Pass sorted tasks to parent component
    }
  }, [sortedTasks, setSortedTasks]);

  return (
    <div>
    </div>
  );
};

function App() {
  const [sortedTasks, setSortedTasks] = useState([]); // State for sorted tasks

  return (
    <div className="app">
      <ListHeader listName={"To Do List"} /> {/* Display header */}
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task} />)} {/* Render tasks */}
      <Appt setSortedTasks={setSortedTasks} /> {/* Fetch and sort tasks */}
    </div>
  );
}

export default App;
