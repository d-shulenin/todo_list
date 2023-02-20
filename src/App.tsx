import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Column from "./components/Column/Column";

export interface TodoI {
  id: string;
  text: string;
  priority: "low" | "medium" | "high";
  date: Date;
  done: boolean;
  fulfill?: (props: TodoI) => void;
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
      <div className=" w-2/5 h-85vh pt-5 pb-10 flex flex-col gap-6 bg-wr rounded-xl shadow-wrapper">
        <Header date={date} setModal={setModal} />
        <div className="px-2 grid grid-cols-2 gap-7 flex-grow">
          <Column type="to do" todos={todos} setTodos={setTodos} />
          <Column type="done" todos={todos} setTodos={setTodos} />
        </div>
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
