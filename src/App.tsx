import { useState, useEffect } from "react";
import Frontside from "./components/Frontside/Frontside";
import Backside from "./components/Backside/Backside";

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
  const [date, setDate] = useState<Date>(new Date());
  const [flipped, setFlipped] = useState<boolean>(false);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="w-full h-screen bg-bg flex justify-center items-center text-typo">
      <div className="xs:w-4/5 sm:w-2/5 h-85vh perspective-2000">
        <div
          className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
            flipped && "rotate-y-180"
          }`}
        >
          <Frontside
            date={date}
            setDate={setDate}
            todos={todos}
            setFlipped={setFlipped}
            setTodos={setTodos}
          />
          <Backside
            date={date}
            flipped={flipped}
            setFlipped={setFlipped}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>
      <span className="absolute sm:bottom-3 sm:top-auto xs:top-[calc(100vh-2rem)] sm:right-3 xs:rigth-1/2">
        Designed by Midjourney
      </span>
    </div>
  );
}

export default App;
