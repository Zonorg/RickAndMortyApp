import React from "react";
import { validate } from "./validation";
import styles from "../Form/Form.module.css";

export default function Form({ login }) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });
  const [errors, setError] = React.useState({});

  function handleInputChange(e) {
    setError(validate({ ...userData, [e.target.name]: e.target.value }));
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(userData);
  }

  return (
    <div>
      <form className={styles.containerForm} onSubmit={handleSubmit}>
        <img className={styles.imgLogin} src="/hero.png" alt="hero" />
        <h1 className={styles.h1Login}>Login</h1>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          onChange={handleInputChange}
          value={userData.username}
        />
        <p>{errors.username}</p>
        <label htmlFor="username">Password: </label>
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          value={userData.password}
        />
        <p>{errors.password}</p>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}
