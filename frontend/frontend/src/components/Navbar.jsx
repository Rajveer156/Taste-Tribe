import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    navigate("/Content");
  };

  return (
    <>
      <nav>
        <img src="icon.png" alt="icon" />
        <div className="logo">TasteTribe</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={700}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn" onClick={handleMenuClick}>MENU</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
