import { LoginForm } from "./components/LoginForm";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [theme, setTheme] = useState("light");
  const darkTheme = () => {
    setTheme("dark");
  };
  const lightTheme = () => {
    setTheme("light");
  };

  const changeTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return ReactDOM.createPortal(
    <>
      <ThemeProvider value={{ theme, lightTheme, darkTheme }}>
        <div
          className={
            theme == "dark"
              ? "bg-regal-blue p-2 flex justify-end"
              : "p-2 flex justify-end"
          }
        >
          <button
            onClick={changeTheme}
            className={
              theme == "dark"
                ? "shadow-md hover:shadow-teal-100  border-white border-2 w-fit px-6 py-1 rounded-md text-white"
                : "shadow-md hover:shadow  border-2 w-fit px-6 py-1 rounded-md "
            }
          >
            {" "}
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
        <LoginForm />
      </ThemeProvider>
    </>,
    document.getElementById("portal-root")
  );
}

export default App;
