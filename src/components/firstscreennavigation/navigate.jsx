import React, { useState } from "react";
import LoginPage from "../login page/login";
import HomePg from "../home page/home";

export default function Navigate() {
  const [currentUser, setcurrentUser] = useState(
    localStorage.getItem("currentUser")
      ? JSON.parse(localStorage.getItem("currentUser"))
      : null
  );

  if (currentUser == null) {
    return <LoginPage />;
  } else {
    return <HomePg />;
  }
}
