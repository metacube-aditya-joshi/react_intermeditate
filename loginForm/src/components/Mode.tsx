import React from 'react'

function Mode({theme,setTheme}) {
    const changeTheme = () => {
        if (theme == "dark") {
          setTheme("light");
        } else {
          setTheme("dark");
        }
      };
  return (
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
  )
}

export default Mode