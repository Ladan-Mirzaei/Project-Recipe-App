// src/pages/Login.jsx
import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

function Login2() {
  const [inputValue, setInputValue] = useState({});
  const navigate = useNavigate();

  async function handleOnSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const age = formData.get("age");
    const newUser = { name, age };
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
      // body: JSON.stringify({
      //   name: "John Doe",
      //   age: 29,
    });

    if (!response.ok) {
      console.warn("Response is not OK!");
      return;
    }

    // Router Hinzufügen  Benutzers zur Listlogin
    navigate("/login/list", {
      state: { name: inputValue.name, age: inputValue.age },
    });
  }

  return (
    <div>
      <div className="login">
        <form onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              value={inputValue.name}
              onChange={(e) =>
                setInputValue({ ...inputValue, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              name="age"
              value={inputValue.age}
              onChange={(e) =>
                setInputValue({ ...inputValue, age: e.target.value })
              }
              required
            />
          </div>
          <div className="button-row">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login2;
