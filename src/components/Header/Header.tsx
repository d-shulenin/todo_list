import { FC, Dispatch } from "react";
import filter from "../../assets/icons/filter.png";
import add from "../../assets/icons/add.png";

interface HeaderI {
  date: string;
  setModal: Dispatch<React.SetStateAction<boolean>>;
}

const Header: FC<HeaderI> = ({ date, setModal }) => {
  return (
    <header className="px-7 flex justify-between items-center">
      <button className="w-8 h-8 bg-btn rounded-md flex justify-center items-center cursor-pointer shadow-button active:scale-95">
        <img className="w-4/6" src={filter} alt="filter"></img>
      </button>
      <h1 className="text-3xl font-semibold">{date}</h1>
      <button
        className="w-8 h-8 bg-btn rounded-md flex justify-center items-center cursor-pointer shadow-button active:scale-95"
        onClick={() => setModal(true)}
      >
        <img className="w-4/5" src={add} alt="add"></img>
      </button>
    </header>
  );
};

export default Header;
