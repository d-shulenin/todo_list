import { FC, FormEvent, Dispatch, useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { TodoI } from "../../App";
import back from "./../../assets/icons/back.png";
import RadioButton from "../RadioButton/RadioButton";
import { getDate } from "../../utilities/getDate";

interface BacksideI {
  date: Date;
  flipped: boolean;
  todos: TodoI[];
  setFlipped: Dispatch<React.SetStateAction<boolean>>;
  setTodos: Dispatch<React.SetStateAction<TodoI[]>>;
}

const Backside: FC<BacksideI> = ({
  flipped,
  todos,
  date,
  setFlipped,
  setTodos,
}) => {
  const [edited, setEdited] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [priority, setPriority] = useState<string>("");
  function goBack() {
    setFlipped(false);
    setValue("");
    setPriority("");
    if (edited) localStorage.setItem("edited", "");
    setEdited("");
  }
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (edited) {
      const newTodos = todos.map((todo) => {
        if (todo.id === edited)
          return { ...todo, text: value, priority: priority };
        else return todo;
      });
      setTodos(newTodos);
      setEdited("");
      localStorage.setItem("edited", "");
    } else {
      if (value.trim()) {
        const newTodo: TodoI = {
          id: nanoid(),
          text: value,
          priority,
          date: getDate(date),
          done: false,
        };
        setTodos([...todos, newTodo]);
      }
    }
    setValue("");
    setPriority("");
    setFlipped(false);
  }
  useEffect(() => {
    try {
      const editedTodo = JSON.parse(localStorage.getItem("edited") || "");
      if (editedTodo) {
        const { text, priority, id } = editedTodo;
        setValue(text);
        setPriority(priority);
        setEdited(id);
      }
    } catch (e) {}
  }, [flipped]);
  return (
    <div className="w-full h-full rotate-y-180 px-7 pt-5 pb-10 backface-visibility-hidden bg-wr text-typo rounded-xl shadow-wrapper flex flex-col">
      <button
        className="w-8 h-8 bg-btn rounded-md flex justify-center items-center cursor-pointer shadow-button active:scale-95"
        onClick={goBack}
      >
        <img className="w-4/6" src={back} alt="back"></img>
      </button>
      <form
        className="w-2/3 self-center flex flex-col my-auto items-center gap-6 rounded-xl"
        onSubmit={submit}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold uppercase">Add new todo</h2>
        <input
          autoFocus
          className="p-1 pl-2 w-full outline-none"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="To do..."
        ></input>
        <h3 className=" font-medium self-start">Todo date: {getDate(date)}</h3>
        <div className="w-full flex flex-col gap-3">
          <h3 className="self-start">Choose priority</h3>
          <RadioButton priority={priority} setPriority={setPriority} />
        </div>
        <button className="bg-btn w-full rounded-md shadow-button p-2 font-semibold active:scale-105">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Backside;
