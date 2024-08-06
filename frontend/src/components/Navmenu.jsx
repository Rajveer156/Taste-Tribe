import React, { useState } from "react";
import { menu } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Navmenu = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <>
      <navm>
        <img src="icon.png" alt="icon" />
        <div className="logo">TasteTribe</div>
        <div className={show ? "navLinks showmenu" : "navmLinks"}>
          <div className="Links">
            {menu[0].navbarmenu.map((element) => (
              <Link
                to={element.Link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.Title}
              </Link>
            ))}
          </div>
          <button className="menuBtn" onClick={handleHomeClick}>Home</button>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </navm>
    </>
  );
};

export default Navmenu;
