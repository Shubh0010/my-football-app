import { COMPANY_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={COMPANY_URL} />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;