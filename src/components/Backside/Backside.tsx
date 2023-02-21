import { FC, FormEvent, Dispatch, useState } from "react";
import { nanoid } from "nanoid";
import { TodoI } from "../../App";
import { getDate } from "../../utilities/getDate";
import back from "./../../assets/icons/back.png";
import RadioButton from "../RadioButton/RadioButton";

interface BacksideI {
  todos: TodoI[];
  setFlipped: Dispatch<React.SetStateAction<boolean>>;
  setTodos: Dispatch<React.SetStateAction<TodoI[]>>;
}

const Backside: FC<BacksideI> = ({ todos, setFlipped, setTodos }) => {
  const [value, setValue] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  function addTodo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const date = getDate();
    if (value.trim()) {
      const newTodo: TodoI = {
        id: nanoid(),
        text: value,
        priority,
        date,
        done: false,
      };
      setTodos([...todos, newTodo]);
      setValue("");
      setFlipped(false);
    } else alert("Type the text"); //добавить обработку невыбранного приоритета
  }
  return (
    <div className="w-full h-full rotate-y-180 px-7 pt-5 pb-10 backface-visibility-hidden bg-wr text-typo rounded-xl shadow-wrapper flex flex-col">
      <button
        className="w-8 h-8 bg-btn rounded-md flex justify-center items-center cursor-pointer shadow-button active:scale-95"
        onClick={() => setFlipped(false)}
      >
        <img className="w-4/6" src={back} alt="back"></img>
      </button>
      <form
        className="w-2/3 self-center flex flex-col my-auto items-center gap-3 rounded-xl"
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
        <RadioButton priority={priority} setPriority={setPriority} />
        <button className="bg-btn w-full rounded-md shadow-button p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Backside;
