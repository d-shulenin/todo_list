import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Column from "./components/Column/Column";
import { getDate } from "./utilities/getDate";

export interface TodoI {
  id: string;
  text: string;
  priority: "low" | "medium" | "high";
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
          <div className="absolute w-full h-full bg-wr pt-5 pb-10 flex flex-col gap-6 rounded-xl shadow-wrapper backface-visibility-hidden">
            <Header date={date} setFlipped={setFlipped} />
            <div className="px-2 grid grid-cols-2 gap-7 flex-grow">
              <Column type="to do" todos={todos} setTodos={setTodos} />
              <Column type="done" todos={todos} setTodos={setTodos} />
            </div>
          </div>
          <Modal setFlipped={setFlipped} todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
