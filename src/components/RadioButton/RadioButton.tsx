import { FC, Dispatch, MouseEvent } from "react";

interface RadioButtonI {
  priority: string;
  setPriority: Dispatch<React.SetStateAction<string>>;
}

const options: string[] = ["low", "medium", "high"];

const RadioButton: FC<RadioButtonI> = ({ priority, setPriority }) => {
  function clickHandler(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    setPriority(target.value);
  }
  return (
    <div className="w-full flex bg-todo_wr_bg rounded-md">
      {options.map((option) => (
        <button
          key={option}
          className={`flex-1 p-1 first-letter:uppercase transition-all duration-300 ${
            option === priority && "bg-btn rounded-md shadow-button"
          }`}
          value={option}
          onClick={clickHandler}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default RadioButton;
