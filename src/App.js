import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const emailValidation = () => {
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (regEx.test(email)) {
      setMessage("Login is Valid");
    } else if (!regEx.test(email) && email !== "") {
      setMessage("Login is Not Valid");
    } else {
      setMessage("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    emailValidation(); // Validate email
    // Add password validation here if needed
  };

  return (
    <div className="app">
      <div className="header">
        <h2>Login Authentication</h2>
      </div>
      <div className="card">
        <label htmlFor="email" className="label">
          Email:
        </label>
        <input
          id="email"
          className="input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <label htmlFor="password" className="label">
          Password:
        </label>
        <input
          id="password"
          className="input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button onClick={handleSubmit}>Login</button>
        <p className="message">{message}</p>
      </div>
    </div>
  );
}

export default App;
