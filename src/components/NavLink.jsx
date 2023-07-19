import React from "react";
import { Link } from 'react-router-dom';

const NavLink = (props) => {
  return (
    <div>
      <li className="navItem">
        <div style={{ marginTop: props.active ? 9.5 : 0 }}>
          <Link to={'/'+props.toPage}>
           {props.title}
           </Link>
        </div>
        <hr
          style={{
            display: props.active ? "block" : "none",
            border: "1.5px solid #c64b3a",
            width: props.length,
            margin: 0,
            marginTop: 8,
          }}
        ></hr>
      </li>
    </div>
  );
};

export default NavLink;