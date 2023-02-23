import { FC, Dispatch, useState } from "react";
import Select from "../Select/Select";
import filter from "../../assets/icons/filter.png";
import add from "../../assets/icons/add.png";
import calendarIcon from "../../assets/icons/calendar.png";
import { getDate } from "../../utilities/getDate";
import Calendar from "react-calendar";
import "./calendar.css";

interface HeaderI {
  date: Date;
  priorities: string[];
  setDate: Dispatch<React.SetStateAction<Date>>;
  setFlipped: Dispatch<React.SetStateAction<boolean>>;
  setPriorities: Dispatch<React.SetStateAction<string[]>>;
}

const Header: FC<HeaderI> = ({
  date,
  priorities,
  setFlipped,
  setPriorities,
  setDate,
}) => {
  const [calendar, setCalendar] = useState<boolean>(false);
  const [select, setSelect] = useState<boolean>(false);
  function changeDate(picked: Date): void {
    setDate(picked);
    setCalendar(false);
  }
  return (
    <header className="px-7 flex justify-between items-center">
      <button
        className="w-8 h-8 bg-btn rounded-md flex justify-center items-center cursor-pointer shadow-button active:scale-95"
        onClick={() => setSelect((prev) => !prev)}
      >
        <img className="w-4/6" src={filter} alt="filter"></img>
      </button>
      <Select
        select={select}
        priorities={priorities}
        setPriorities={setPriorities}
      />
      <div className="flex items-center">
        <button
          className="block w-8 h-8"
          onClick={() => setCalendar((prev) => !prev)}
        >
          <img className="w-4/6" src={calendarIcon} alt="calendar" />
        </button>
        {calendar && (
          <Calendar
            className="absolute shadow-calendar leading-6 p-2 bg-btn w-64 rounded-lg text-black"
            onChange={changeDate}
            value={date}
          />
        )}
        <h1 className="text-3xl font-semibold">{getDate(date)}</h1>
      </div>
      <button
        className="w-8 h-8 bg-btn rounded-md flex justify-center items-center cursor-pointer shadow-button active:scale-95"
        onClick={() => setFlipped(true)}
      >
        <img className="w-4/5" src={add} alt="add"></img>
      </button>
    </header>
  );
};

export default Header;
