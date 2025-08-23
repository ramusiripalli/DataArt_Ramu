import React from "react";

interface HeaderProps {
  onToggleTheme: () => void;
  /** Current theme so button can announce state */
  currentTheme?: "light" | "dark";
}

const Header: React.FC<HeaderProps> = ({ onToggleTheme, currentTheme }) => {
  const isDark = currentTheme === "dark";

  return (
    <header className="header" aria-label="Main header">
      {/* Logo */}
      <div className="logo">
        <img
          src="https://static.thenounproject.com/png/timeline-icon-84003-512.png"
          alt="Timeline logo"
          width={50}
          height={50}
        />
      </div>

      {/* Title */}
      <h2 id="h2TimeLine">Timeline</h2>

      {/* Theme toggle */}
      <button
        className="theme-toggle"
        onClick={onToggleTheme}
        aria-pressed={isDark}
        aria-label={`Activate ${isDark ? "light" : "dark"} theme`}
      >
        {isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
    </header>
  );
};

export default Header;
