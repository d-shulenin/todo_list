import { FC, FormEvent, Dispatch, useState } from "react";
import { createPortal } from "react-dom";
import { nanoid } from "nanoid";
import { TodoI } from "../../App";

interface ModalI {
  modal: boolean;
  todos: TodoI[];
  setModal: Dispatch<React.SetStateAction<boolean>>;
  setTodos: Dispatch<React.SetStateAction<TodoI[]>>;
}

const Modal: FC<ModalI> = ({ modal, todos, setModal, setTodos }) => {
  const [value, setValue] = useState<string>("");
  function addTodo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (value.trim()) {
      const newTodo: TodoI = {
        id: nanoid(),
        text: value,
        priority: "high",
        date: new Date(),
        done: false,
      };
      setTodos([...todos, newTodo]);
      setValue("");
      setModal(false);
    } else alert("Type the text"); //добавить обработку невыбранного приоритета
  }
  return modal
    ? createPortal(
        <div className="w-full h-screen fixed top-0 left-0 z-1 ">
          <form className="" onSubmit={addTodo}>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></input>
            <button>Add todo</button>
          </form>
        </div>,
        document.getElementById("portal")!
      )
    : null;
};

export default Modal;
