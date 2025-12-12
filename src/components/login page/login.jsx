import "./log.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function LoginPage() {
  const [allUserData, setallUserData] = useState(
    localStorage.getItem("signupData")
      ? JSON.parse(localStorage.getItem("signupData"))
      : []
  );
  const navigate = useNavigate();
  const [logEmail, setLogEmail] = useState("");
  const [logpassword, setLogpassword] = useState("");
  // const [currentUser, setcurrentUser] = useState();

  function LoginFunct() {
    if (logEmail && logpassword) {
      if (logEmail.endsWith("@gmail.com")) {
        let match;
        for (let i = 0; i < allUserData.length; i++) {
          if (
            logEmail === allUserData[i].Email &&
            logpassword === allUserData[i].Password
          ) {
            match = true;
            const currentUser = {
              Username: allUserData[i].Name,
              Email: allUserData[i].Email,
            };
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            break;
          } else {
            match = false;
          }
        }

        if (match) {
          alert(`Login successfull !`);
          navigate("/");
        } else {
          alert(`User not Found`);
        }
      } else {
        alert(`please Enter valid Email`);
      }
    } else {
      alert("please fill all the required details to proceed");
    }
  }

  return (
    <>
      <div className="contain">
        <section className="formstyling">
          <h1 className="headingstyling">Login</h1>
          <input
            onChange={(e) => setLogEmail(e.target.value)}
            className="inputstyling"
            type="email"
            placeholder="Your Email"
          />
          <input
            onChange={(e) => setLogpassword(e.target.value)}
            className="inputstyling"
            type="password"
            placeholder="Password"
          />
          <button onClick={LoginFunct} className="buttonstyling">
            LOGIN
          </button>
          <p className="parastyling">
            Don't have an account ?
            <Link className="linkstyling" to="/signup">
              Resgister
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}

export default LoginPage;
