import useTheme from "../context/ThemeContext";
import { NavLink } from "react-router";
import Card from "./Card";
import { SubmissionData } from "../store/slice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
function Dispaly() {
  const { theme } = useTheme();
  const submissions = useSelector((state: RootState) => state.form.submissions);
  return (
    <div
      className={
        theme == "dark"
          ? "bg-regal-blue text-white h-screen flex flex-col justify-center items-center gap-10"
          : "h-screen flex flex-col justify-center items-center gap-10"
      }
    >
      <div className="flex gap-3 flex-wrap ">
        {submissions.length > 0 ? (
          submissions.map((submission: SubmissionData , index: number) => {
            const { firstName, lastName, email, company, country } = submission;
            return (
              <Card
                key={index}
                firstName={firstName}
                lastName={lastName}
                email={email}
                country={country}
                company={company}
              />
            );
          })
        ) : (
          <div>No submissions yet.</div>
        )}
      </div>

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
  );
}

export default Dispaly;
