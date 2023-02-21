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
    <div className="w-full flex bg-todo_wr_bg">
      {options.map((option) => (
        <button
          key={option}
          className={`flex-1 first-letter:uppercase ${
            option === priority && "bg-btn"
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