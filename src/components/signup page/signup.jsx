import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const allUserData = localStorage.getItem("signupData")
  ? JSON.parse(localStorage.getItem("signupData"))
  : [];

function Signup() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Number, setNumber] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  function Signupfunct() {
    if (Name && Email && Number && Password) {
      if (Email.endsWith("@gmail.com")) {
        if (Number.startsWith("03") && Number.length === 11) {
          alert("account created");
          const signupData = {
            Name: Name,
            Email: Email,
            Number: Number,
            Password: Password,
            todos: [],
          };
          allUserData.push(signupData);
          navigate("/login");
        } else {
          alert(
            "Number must have 03 digits in the start and must be of 11 digits",
          );
        }
      } else {
        alert("invalid email");
      }
    } else {
      alert("please fill all the details");
    }
    localStorage.setItem("signupData", JSON.stringify(allUserData));
  }

  return (
    <>
      <div className="conatiner">
        <section id="signUp" className="formstyling">
          <h1 className="headingstyling">Register</h1>
          <input
            onChange={(e) => setName(e.target.value)}
            className="inputstyling"
            type="text"
            placeholder="Your Name"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="inputstyling"
            type="email"
            placeholder="Your Email"
          />
          <input
            onChange={(e) => setNumber(e.target.value)}
            className="inputstyling"
            type="number"
            placeholder="Your Number"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="inputstyling"
            type="password"
            placeholder="Password"
          />
          <button onClick={Signupfunct} className="buttonstyling">
            SIGN UP
          </button>
          <p className="parastyling">
            Already have an account ?
            <Link className="linkstyling" to="/login">
              Log In
            </Link>
          </p>
        </section>
      </div>
    </>
  );
}

export default Signup;
