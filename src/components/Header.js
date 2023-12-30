import { COMPANY_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  return (
    <div className='flex justify-between bg-green-200 to-green-200 shadow-lg'>
      <div className='logo-container'>
        <img className='size-20 m-4' src={COMPANY_URL} />
      </div>
      <div className='flex items-center'>
        <ul className="flex p-4 m-4">
          <li className="px-4 text-zinc-800 hover:text-zinc-500">
            <Link to="/la-liga">LaLiga</Link>
          </li>
          <li className="px-4 text-zinc-800 hover:text-zinc-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-zinc-800 hover:text-zinc-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 text-zinc-800 hover:text-zinc-500">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 text-zinc-800 hover:text-zinc-500">Settings</li>
          <li className="px-4 text-zinc-800 hover:text-zinc-500">{loggedInUser}</li>
          <li>
            {onlineStatus ? "🟢" : "🔴"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;