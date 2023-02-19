import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

export interface TodoI {
  id: string;
  text: string;
  priority: "low" | "medium" | "high";
  date: Date;
  done: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoI[]>(
    JSON.parse(localStorage.getItem("todos")!) || []
  );
  const [date, setDate] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  useEffect(() => {
    const now = new Date().toLocaleDateString("en-gb", {
      month: "long",
      day: "numeric",
    });
    setDate(now);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className="w-full h-screen bg-bg flex justify-center items-center text-typo">
      <div className="w-1/2 h-4/5 py-5 px-7 bg-wr rounded-xl shadow-wrapper">
        <Header date={date} setModal={setModal} />
      </div>
      <Modal
        modal={modal}
        setModal={setModal}
        todos={todos}
        setTodos={setTodos}
      ></Modal>
    </div>
  );
}

export default App;
