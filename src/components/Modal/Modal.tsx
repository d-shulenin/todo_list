import { FC, FormEvent, Dispatch, useState } from "react";
import { nanoid } from "nanoid";
import { TodoI } from "../../App";
import { getDate } from "../../utilities/getDate";

interface ModalI {
  todos: TodoI[];
  setFlipped: Dispatch<React.SetStateAction<boolean>>;
  setTodos: Dispatch<React.SetStateAction<TodoI[]>>;
}

const Modal: FC<ModalI> = ({ todos, setFlipped, setTodos }) => {
  const [value, setValue] = useState<string>("");
  function addTodo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const date = getDate();
    if (value.trim()) {
      const newTodo: TodoI = {
        id: nanoid(),
        text: value,
        priority: "high",
        date,
        done: false,
      };
      setTodos([...todos, newTodo]);
      setValue("");
      setFlipped(false);
    } else alert("Type the text"); //добавить обработку невыбранного приоритета
  }
  return (
    <div className="w-full h-full rotate-y-180 backface-visibility-hidden bg-wr text-typo rounded-xl shadow-wrapper">
      <form
        className="p-5 flex flex-col items-center gap-3 rounded-xl"
        onSubmit={addTodo}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-medium">Add new todo</h2>
        <input
          autoFocus
          className="p-1 pl-2 w-full outline-none"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="To do..."
        ></input>
        <button className="bg-btn w-full rounded-md shadow-button p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Modal;
