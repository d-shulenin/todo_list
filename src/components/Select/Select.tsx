import { FC, Dispatch, MouseEvent } from "react";

interface SelectI {
  select: boolean;
  priorities: string[];
  setPriorities: Dispatch<React.SetStateAction<string[]>>;
}

const options = ["high", "medium", "low"];

const Select: FC<SelectI> = ({ select, priorities, setPriorities }) => {
  function changePriorities(e: MouseEvent<HTMLButtonElement>) {
    const target = e.target as HTMLButtonElement;
    const priority = target.innerText.toLowerCase();
    setPriorities(
      priorities.includes(priority)
        ? priorities.filter((pr) => pr !== priority)
        : [...priorities, priority]
    );
  }
  return select ? (
    <div className="shadow-select overflow-hidden absolute rounded-lg bg-btn left-18 text-black flex flex-col items-start text-sm">
      {options.map((option) => (
        <button
          className={`w-full first-letter:uppercase px-3 py-1 hover:bg-todo_wr_bg ${
            priorities.includes(option) && "font-semibold"
          }`}
          key={option}
          onClick={changePriorities}
        >
          {option}
        </button>
      ))}
    </div>
  ) : null;
};

export default Select;
