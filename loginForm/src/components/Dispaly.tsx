import useTheme from "../context/ThemeContext";
import { NavLink } from "react-router";
function Dispaly() {
    const {theme} = useTheme();
  return (
    <div className={theme == "dark" ? "bg-regal-blue text-white h-screen" : "h-screen"}>Dispaly
 <NavLink
              to={"/"}
              type="submit"
              className={
                theme == "dark"
                  ? "shadow-md hover:shadow-teal-100  border-white border-2 w-fit px-6 py-1 rounded-md text-white"
                  : "shadow-md hover:shadow  border-2 w-fit px-6 py-1 rounded-md "
              }
            >
              Home
            </NavLink>
    </div>
  )
}

export default Dispaly