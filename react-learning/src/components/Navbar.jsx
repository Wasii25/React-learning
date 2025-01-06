import logo from '../assets/react.svg';
    

export default function NavBar(){
    return ( 
        <nav className="navbar">
        <div className="logo">
        <img src={logo} alt="Logo" />
            </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="menu-toggle">
          {/* Icon for mobile menu toggle */}
        </div>
      </nav>
    );
};