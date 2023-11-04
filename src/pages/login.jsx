/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout"
import React, { useState } from "react"
import styles from "/src/styles/form.module.css"
import Link from "next/link"
import { useRouter } from "next/router"

export default function login() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
    router.push("/konto")
  }

  return (
    <Layout title="Logowanie">
      <div className={`wrapper container ${styles.form_container}`}>
        <form className={styles.form} onSubmit={e => handleSubmit(e)}>
          <h2>Logowanie</h2>

          <label htmlFor="username">Nazwa Użytkownika / Email</label>
          <input
            id="username"
            type="text"
            onChange={e => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Hasło</label>
          <input
            id="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
            required
          />

          <p>
            Nie masz jeszcze konta?{" "}
            <Link href="/register">Zarejestruj się</Link>
          </p>

          <button className={styles.form__btn} type="submit">
            <div className="btn_cta">Zaloguj</div>
          </button>
        </form>
      </div>
    </Layout>
  )
}
