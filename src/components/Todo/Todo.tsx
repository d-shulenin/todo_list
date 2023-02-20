import { FC } from "react";
import { TodoI } from "../../App";

const Todo: FC<TodoI> = (props) => {
  const { text, done, fulfill } = props;
  return (
    <li className={`p-2 rounded-lg ${done ? "bg-done_bg" : "bg-todo_bg"}`}>
      <h3>{text}</h3>
      {!done && (
        <button
          className="border-2 border-black"
          onClick={() => fulfill!(props)}
        >
          Done
        </button>
      )}
    </li>
  );
};

export default Todo;
