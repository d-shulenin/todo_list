import { FC, Dispatch } from "react";
import { TodoI } from "../../App";

interface TodoActions {
  fulfillTodo: (props: TodoI) => void;
  deleteTodo: (id: string) => void;
  setFlipped: Dispatch<React.SetStateAction<boolean>>;
}

const Todo: FC<TodoI & TodoActions> = (props) => {
  const { id, text, done, fulfillTodo, deleteTodo, setFlipped } = props;
  function editTodo() {
    localStorage.setItem("edited", JSON.stringify(props));
    setFlipped(true);
  }
  return (
    <li className={`p-2 rounded-lg ${done ? "bg-done_bg" : "bg-todo_bg"}`}>
      <h3>{text}</h3>
      {!done && (
        <div>
          <button
            className="border-2 border-black"
            onClick={() => fulfillTodo(props)}
          >
            Done
          </button>
          <button className="border-2 border-black" onClick={editTodo}>
            Edit
          </button>
          <button
            className="border-2 border-black"
            onClick={() => deleteTodo(id)}
          >
            Delete
          </button>
        </div>
      )}
    </li>
  );
};

export default Todo;
