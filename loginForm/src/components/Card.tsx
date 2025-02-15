import useTheme from "../context/ThemeContext";
function Card({
  firstName,
  lastName,
  email,
  company,
  country,
}: {
  firstName: string,
  lastName: string,
  email: string,
  company: string,
  country: string,
}) {
    const {theme} = useTheme()
  return (
    <div  className={
        theme == "dark"
          ? "flex flex-col justify-center gap-4 border-2 rounded-md p-5 border-white   "
          : "flex flex-col justify-center gap-4 border-2 rounded-md p-5"
      }>
      <div className="font-bold" >Name : {firstName + " " + lastName}</div>
      <div className="font-bold">E-Mail : {email}</div>
      <div className="font-bold">Company : {company}</div>
      <div className="font-bold"    >Country : {country}</div>
    </div>
  );
}

export default Card;
