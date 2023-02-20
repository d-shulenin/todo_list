import { FC, useMemo, Dispatch } from "react";
import Todo from "../Todo/Todo";
import { TodoI } from "../../App";

interface ColumnI {
  type: "to do" | "done";
  todos: TodoI[];
  setTodos: Dispatch<React.SetStateAction<TodoI[]>>;
}

const isDone: { "to do": boolean; done: boolean } = {
  "to do": false,
  done: true,
};

const Column: FC<ColumnI> = ({ type, todos, setTodos }) => {
  const items = useMemo(
    () => todos.filter((todo: TodoI) => todo.done === isDone[type]),
    [todos]
  );
  function fulfill(props: TodoI) {
    const restTodos = todos.filter((item) => item.id !== props.id);
    setTodos([...restTodos, { ...props, done: true }]);
  }
  return (
    <div
      className={`rounded-xl shadow-column px-6 pt-6 pb-4 ${
        type === "to do" ? " bg-todo_wr_bg" : "bg-done_wr_bg"
      }`}
    >
      <h1 className="w-2/3 first-letter:uppercase text-3xl pb-3 font-semibold border-b-2 border-black/30">
        {type}
      </h1>
      <ul className="pt-3 flex flex-col gap-2">
        {items.map((item) => (
          <Todo key={item.id} {...item} fulfill={fulfill} />
        ))}
      </ul>
    </div>
  );
};

export default Column;
