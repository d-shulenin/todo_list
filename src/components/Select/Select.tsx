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
    <div className="absolute p-2 rounded-lg bg-btn left-20 flex flex-col items-start gap-1 text-sm">
      {options.map((option) => (
        <button
          className={`first-letter:uppercase ${
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
