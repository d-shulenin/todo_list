import { FC, Dispatch } from "react";
import Header from "./../Header/Header";
import Column from "./../Column/Column";
import { TodoI } from "../../App";

interface FrontsideI {
  date: string;
  todos: TodoI[];
  setTodos: Dispatch<React.SetStateAction<TodoI[]>>;
  setFlipped: Dispatch<React.SetStateAction<boolean>>;
}

const Frontside: FC<FrontsideI> = ({ date, todos, setTodos, setFlipped }) => {
  return (
    <div className="absolute w-full h-full bg-wr pt-5 pb-10 flex flex-col gap-6 rounded-xl shadow-wrapper backface-visibility-hidden">
      <Header date={date} setFlipped={setFlipped} />
      <div className="px-2 grid grid-cols-2 gap-7 flex-grow">
        <Column type="to do" todos={todos} setTodos={setTodos} />
        <Column type="done" todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default Frontside;
