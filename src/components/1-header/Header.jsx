import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="  flex">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-menu flex"
      >
        {" "}
      </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="https://www.facebook.com/hello7world/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </li>

          <li>
            <a href="https://www.instagram.com/haythem.di.94/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="https://github.com/haythem-dh-hub" target="_blank" rel="noopener noreferrer">Git-hub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/haythem-dhifallah-330716325/">Linkedin</a>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          // Send value to LS
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          // get value from LS
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"> </span>
        ) : (
          <span className="icon-sun"> </span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li>
              <button
                className="icon-close"
                onClick={() => {
                  setshowModal(false);
                }}
              />
            </li>
            <li>
              <a href="https://www.facebook.com/hello7world/">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com/haythem.di.94/">Instagram</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="https://github.com/haythem-dh-hub">Git-hub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/haythem-dhifallah-330716325/">Linkedin</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
