import { FC, Dispatch } from "react";
import { TodoI } from "../../App";
import complete from "../../assets/icons/done.png";
import trash from "../../assets/icons/delete.png";
import edit from "../../assets/icons/edit.png";

interface TodoActions {
  fulfillTodo: (props: TodoI) => void;
  deleteTodo: (id: string) => void;
  setFlipped: Dispatch<React.SetStateAction<boolean>>;
}

const prioritiesColors: Record<string, string> = {
  high: "bg-red-400",
  medium: "bg-orange-300",
  low: "bg-gray-400",
};

const Todo: FC<TodoI & TodoActions> = (props) => {
  const { id, text, done, priority, fulfillTodo, deleteTodo, setFlipped } =
    props;
  function editTodo() {
    localStorage.setItem("edited", JSON.stringify(props));
    setFlipped(true);
  }
  return (
    <li
      className={`p-2 rounded-lg flex gap-2 items-center ${
        done ? "bg-done_bg shadow-done" : "bg-todo_bg shadow-todos"
      }`}
    >
      {Boolean(priority) && (
        <div
          className={`rounded-full w-2 h-2 ${prioritiesColors[priority]}`}
        ></div>
      )}
      <h3 className="text-sm leading-5">{text}</h3>
      {!done && (
        <div className="mr-0 ml-auto flex gap-1">
          <button
            className="w-5 h-5 bg-btn shadow-controls flex justify-center items-center rounded active:scale-95"
            onClick={() => fulfillTodo(props)}
          >
            <img className="w-4/5" src={complete} alt="done" />
          </button>
          <button
            className="w-5 h-5 bg-btn shadow-controls flex justify-center items-center rounded active:scale-95"
            onClick={editTodo}
          >
            <img className="w-4/5" src={edit} alt="edit" />
          </button>
          <button
            className="w-5 h-5 bg-btn shadow-controls flex justify-center items-center rounded active:scale-95"
            onClick={() => deleteTodo(id)}
          >
            <img className="w-4/5" src={trash} alt="delete" />
          </button>
        </div>
      )}
    </li>
  );
};

export default Todo;
