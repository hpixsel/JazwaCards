/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout"
import React, { useEffect, useState } from "react"
import styles from "/src/styles/form.module.css"
import Link from "next/link"

export default function register() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    console.log(username, password)
  }, [username, password])

  return (
    <Layout>
      <div className={`wrapper container ${styles.form_container}`}>
        <form className={styles.form}>
          <h2>Logowanie</h2>

          <label htmlFor="username">Nazwa Użytkownika / Email</label>
          <input
            id="username"
            type="text"
            onChange={e => setUsername(e.target.value)}
          />

          <label htmlFor="password">Hasło</label>
          <input
            id="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
          />

          <p>
            Nie masz jeszcze konta?{" "}
            <Link href="/register">Zarejestruj się</Link>
          </p>

          <button className={styles.form__btn} type="submit">
            <div className="btn_cta">Zarejestruj</div>
          </button>
        </form>
      </div>
    </Layout>
  )
}
