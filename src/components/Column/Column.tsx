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
      className={`max-h-96 rounded-xl shadow-column pt-6 flex flex-col ${
        type === "to do" ? " bg-todo_wr_bg" : "bg-done_wr_bg"
      }`}
    >
      <h1 className="w-1/2 ml-6 first-letter:uppercase text-3xl pb-3 font-semibold border-b-2 border-black/30">
        {type}
      </h1>
      <ul className="px-3 pt-3 pb-4 flex flex-col gap-2 overflow-auto scrollbar-none">
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
