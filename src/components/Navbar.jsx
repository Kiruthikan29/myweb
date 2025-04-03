import { FaHome, FaUser, FaCode, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home"><FaHome className="icon" /></a>
      <a href="#about"><FaUser className="icon" /></a>
      <a href="#skills"><FaCode className="icon" /></a>
      <a href="#contact"><FaEnvelope className="icon" /></a>
    </nav>
  );
};

export default Navbar;