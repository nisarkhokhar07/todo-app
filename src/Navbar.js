import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
            <li> <a href="/">All Todos</a></li>
            <li><a href="addtodo">Add Todo</a></li>
            <li style={{float: 'right'}}><a href="about">About</a></li>
        </ul>
      </nav>
    </div>
  );
};
