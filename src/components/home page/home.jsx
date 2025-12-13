import { Link, useNavigate } from "react-router-dom";
import Nav from "../navbar/navbar";
import "./home.css";
import { useState } from "react";

export default function Home() {
  // const navigate = useNavigate();
  const [taskinput, settaskinput] = useState();
  const [currentUser, setcurrentUser] = useState(
    localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : []
  );
  const [signupData, setsignupData] = useState(
    localStorage.getItem("signupData")
      ? JSON.parse(localStorage.getItem("signupData"))
      : []
  );
  const [todos, settodos] = useState(returntodos() ? returntodos() : []);
  console.log(todos);

  const listOfTodos = todos.map((value, index) => {
    return (
      <Rendertasks
        value={value}
        key={index}
        indexNumber={index}
        todos={todos}
        settodos={settodos}
        signupData={signupData}
        setsignupData={setsignupData}
        currentUser={currentUser}
      />
    );
  });

  function returntodos() {
    for (let i = 0; i < signupData.length; i++) {
      if (
        currentUser.Username == signupData[i].Name &&
        currentUser.Email == signupData[i].Email
      ) {
        return signupData[i].todos;
      }
    }
  }

  function addtasks() {
    for (let i = 0; i < signupData.length; i++) {
      if (
        currentUser.Username == signupData[i].Name &&
        currentUser.Email == signupData[i].Email
      ) {
        signupData[i].todos.push(taskinput);
        settodos([...signupData[i].todos]);
      }
    }

    localStorage.setItem("signupData", JSON.stringify(signupData));
  }

  function Rendertasks({
    value,
    indexNumber,
    todos,
    settodos,
    signupData,
    setsignupData,
    currentUser,
  }) {
    let [status, setstatus] = useState(false);

    let deletefunct = () => {
      let finaltasklist = todos.filter((value, index) => index != indexNumber);
      settodos(finaltasklist);

      for (let i = 0; i < signupData.length; i++) {
        if (
          currentUser.Username == signupData[i].Name &&
          currentUser.Email == signupData[i].Email
        ) {
          signupData[i].todos = finaltasklist;
          localStorage.setItem("signupData", JSON.stringify(signupData));
        }
      }
    };

    let editfunct = () => {
      let editedtext = prompt("enter the text you want to change");
      todos.splice(indexNumber, 1, editedtext);
      settodos(todos);

      for (let i = 0; i < signupData.length; i++) {
        if (
          currentUser.Username == signupData[i].Name &&
          currentUser.Email == signupData[i].Email
        ) {
          signupData[i].todos = todos;
          localStorage.setItem("signupData", JSON.stringify(signupData));
          setsignupData(JSON.parse(localStorage.getItem("signupData")));
        }
      }
    };

    let checkstatus = () => {
      setstatus(!status);
    };

    return (
      <li className={status ? "completed" : ""}>
        {value}
        <span>
          <i onClick={checkstatus} className="fa-regular fa-circle-check"></i>
          <i onClick={editfunct} className="fa-solid fa-pen-to-square"></i>
          <i onClick={deletefunct} className="fa-solid fa-trash"></i>
        </span>
      </li>
    );
  }

  return (
    <>
      <Nav />
      <div className="container">
        <div className="Box">
          <h1>Hello! {currentUser.Username}, you can add your tasks below</h1>
          <div className="input-and-btn">
            <input
              onChange={(e) => settaskinput(e.target.value)}
              type="text"
              className="inputstyling"
              placeholder="Enter your text"
            />
            <button onClick={addtasks}>ADD TASKS</button>
          </div>
          <ul className="tasks">{listOfTodos}</ul>
        </div>
      </div>
    </>
  );
}
