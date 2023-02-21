import { useState, useEffect } from "react";
import Frontside from "./components/Frontside/Frontside";
import Backside from "./components/Backside/Backside";
import { getDate } from "./utilities/getDate";

export interface TodoI {
  id: string;
  text: string;
  priority: string;
  date: string;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoI[]>(
    JSON.parse(localStorage.getItem("todos")!) || []
  );
  const [date, setDate] = useState<string>("");
  const [flipped, setFlipped] = useState<boolean>(false);
  useEffect(() => {
    const now = getDate();
    setDate(now);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="w-full h-screen bg-bg flex justify-center items-center text-typo">
      <div className="w-2/5 h-85vh perspective-1000">
        <div
          className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
            flipped && "rotate-y-180"
          }`}
        >
          <Frontside
            date={date}
            todos={todos}
            setFlipped={setFlipped}
            setTodos={setTodos}
          />
          <Backside setFlipped={setFlipped} todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
