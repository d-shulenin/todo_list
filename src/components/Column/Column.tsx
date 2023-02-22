import { FC, useMemo, Dispatch } from "react";
import Todo from "../Todo/Todo";
import { TodoI } from "../../App";

interface ColumnI {
  type: "to do" | "done";
  todos: TodoI[];
  setTodos?: Dispatch<React.SetStateAction<TodoI[]>>;
  setFlipped?: Dispatch<React.SetStateAction<boolean>>;
}

const isDone: Record<string, boolean> = {
  "to do": false,
  done: true,
};

const Column: FC<ColumnI> = ({ type, todos, setTodos, setFlipped }) => {
  const items = useMemo(
    () => todos.filter((todo: TodoI) => todo.done === isDone[type]),
    [todos]
  );
  function fulfillTodo(props: TodoI): void {
    const restTodos = todos.filter((todo) => todo.id !== props.id);
    setTodos!([...restTodos, { ...props, done: true }]);
  }
  function deleteTodo(id: string): void {
    setTodos!(todos.filter((todo) => todo.id !== id));
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
          <Todo
            key={item.id}
            {...item}
            fulfillTodo={fulfillTodo}
            deleteTodo={deleteTodo}
            setFlipped={setFlipped!}
          />
        ))}
      </ul>
    </div>
  );
};

export default Column;
