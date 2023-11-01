/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout"
import React, { useEffect, useState } from "react"
import styles from "/src/styles/form.module.css"

export default function register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  useEffect(() => {
    console.log(username, email, password, confirmPassword)
  }, [username, email, password, confirmPassword])

  return (
    <Layout>
      <div className={`wrapper container ${styles.form_container}`}>
        <form className={styles.form} onSubmit={e => e.preventDefault()}>
          <h2>Rejestracja</h2>

          <label htmlFor="username">Nazwa Użytkownika</label>
          <input
            id="username"
            type="text"
            onChange={e => setUsername(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />

          <label htmlFor="password">Hasło</label>
          <input
            id="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />

          <label htmlFor="confirmpassword">Potwierdź Hasło</label>
          <input
            id="confirmpassword"
            type="password"
            onChange={e => setConfirmPassword(e.target.value)}
          />

          <p>
            Masz już konto? <a href="login">Zaloguj</a>
          </p>

          <button className={styles.form__btn} type="submit">
            <div className="btn_cta">Zarejestruj</div>
          </button>
        </form>
      </div>
    </Layout>
  )
}
