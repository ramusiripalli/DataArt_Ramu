import React from "react";

interface HeaderProps {
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleTheme }) => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://static.thenounproject.com/png/timeline-icon-84003-512.png"
          alt="logo"
          width="50"
        />
      </div>
      <div>
        <h2 style={{margin: "0px 9px"}}>TimeLine</h2>
      </div>
      <button className="theme-toggle" onClick={onToggleTheme}>
        Theme Change
      </button>
    </header>
  );
};

export default Header;
