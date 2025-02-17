import { LoginForm } from "./components/LoginForm";
import "./App.css";
import { Routes, Route } from "react-router";
import { ThemeProvider } from "./context/ThemeContext";
import { useState } from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Dispaly from "./components/Dispaly";
import Mode from "./components/Mode";
import ErrorBoundary from './components/ErrorBoundary.tsx'; 
function App() {
  const [theme, setTheme] = useState("light");
  const darkTheme = () => {
    setTheme("dark");
  };
  const lightTheme = () => {
    setTheme("light");
  };

 

  return ReactDOM.createPortal(
    <>
      <ThemeProvider value={{ theme, lightTheme, darkTheme }}>
      <ErrorBoundary>
      <Mode theme={theme} setTheme={setTheme}/>
        <Routes>
          

          <Route index element={<Home/>} />
          <Route path="/login" element={<LoginForm />}/>
          <Route path='/display' element={<Dispaly/>}/>
        </Routes>
        </ErrorBoundary>
      </ThemeProvider>

    </>,
    document.getElementById("portal-root")
  );
}

export default App;
