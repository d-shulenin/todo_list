import { FC, Dispatch, useState } from "react";
import Header from "./../Header/Header";
import Column from "./../Column/Column";
import { TodoI } from "../../App";

interface FrontsideI {
  date: Date;
  todos: TodoI[];
  setTodos: Dispatch<React.SetStateAction<TodoI[]>>;
  setDate: Dispatch<React.SetStateAction<Date>>;
  setFlipped: Dispatch<React.SetStateAction<boolean>>;
}

const Frontside: FC<FrontsideI> = ({
  date,
  todos,
  setDate,
  setTodos,
  setFlipped,
}) => {
  const [priorities, setPriorities] = useState<string[]>([]);
  return (
    <div className="absolute w-full h-full bg-wr pt-5 flex flex-col gap-6 rounded-xl shadow-wrapper backface-visibility-hidden">
      <Header
        date={date}
        setDate={setDate}
        setFlipped={setFlipped}
        priorities={priorities}
        setPriorities={setPriorities}
      />
      <div className="sm:px-2 xs:px-4 grid sm:grid-cols-2 xs:grid-cols-1 gap-6 sm:pb-10 xs:pb-5 flex-grow">
        <Column
          date={date}
          priorities={priorities}
          type="to do"
          todos={todos}
          setTodos={setTodos}
          setFlipped={setFlipped}
        />
        <Column date={date} priorities={priorities} type="done" todos={todos} />
      </div>
    </div>
  );
};

export default Frontside;
