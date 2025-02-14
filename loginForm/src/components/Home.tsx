import { NavLink } from "react-router";
import useTheme from "../context/ThemeContext";
function Home() {
  const { theme } = useTheme();
  return (
    <div className={theme == "dark" ? "bg-regal-blue h-screen" : "h-screen"}>
      <div className="h-3/4 flex justify-center items-center gap-10">
        <NavLink
          to={"display"}
          className={
            theme == "dark"
              ? "text-white border-white border-2 rounded-3xl p-10 px-12 shadow-md hover:shadow-teal-100 "
              : "shadow-md hover:shadow  border-2 rounded-3xl p-10 "
          }
        >
          Display Data
        </NavLink>
        <NavLink
          to={"/login"}
          className={
            theme == "dark"
              ? "text-white border-white border-2 rounded-3xl p-10 px-12 shadow-md hover:shadow-teal-100 "
              : "shadow-md hover:shadow border-2 rounded-3xl p-10 "
          }
        >
          Display Form
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
