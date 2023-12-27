import { COMPANY_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const onlineStatus = useOnlineStatus();

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={COMPANY_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Settings</li>
          <li className="online-status">
            {onlineStatus ? "🟢" : "🔴"}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;