/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout"
import React, { useEffect, useState } from "react"
import styles from "/src/styles/form.module.css"
import { chatGPT } from "@/lib/openai"
import ls from "local-storage"
import { useRouter } from "next/router"
import { setCookie } from "nookies"
import Link from "next/link"

export default function register() {
  const router = useRouter()
  const [key, setKey] = useState("")

  useEffect(() => {
    setKey(localStorage.getItem("key") ? localStorage.getItem("key") : "")
  }, [])

  const [title, setTitle] = useState("")
  const [csv, setCsv] = useState("")
  const [generating, setGenerating] = useState(false)

  const handleCsv = e => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.addEventListener("load", e => {
      let csvData = e.target.result
      let parseData = []

      let newLine = csvData.split("\n")
      for (let i = 0; i < newLine.length; i++) {
        parseData.push(newLine[i].split(","))
      }

      setCsv(parseData.slice(0, 60))
    })

    reader.readAsText(file)
  }

  const handleDone = () => {
    router.push("/generated-cards")
  }

  const handleSubmit = async e => {
    e.preventDefault()
    localStorage.setItem("key", key)

    let prompt = ""

    csv.map(item => {
      prompt += `${item[0]}, ${item[1]}\n`
    })

    setGenerating(true)

    const res = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        key: key,
        prompt: prompt,
      }),
    }).then(res => {
      setGenerating(false)
      return res.json()
    })

    const data = JSON.stringify({
      title: title,
      data: res.message.content,
    })

    ls.set("res", data)
    setCookie(null, "res", true, {
      maxAge: 10 * 365 * 24 * 60 * 60,
      path: "/",
      sameSite: "lax",
    })

    if (ls("res") !== null) {
      handleDone()
    }
  }

  return (
    <Layout title="Generator Fiszek">
      <div className={`wrapper container ${styles.form_container}`}>
        {generating && (
          <div className={styles.generating}>
            <div className={styles.generating__svg}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <circle cx="12" cy="2" r="0" fill="#edf0f8">
                  <animate
                    attributeName="r"
                    begin="0"
                    calcMode="spline"
                    dur="1s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  ></animate>
                </circle>
                <circle
                  cx="12"
                  cy="2"
                  r="0"
                  fill="#edf0f8"
                  transform="rotate(45 12 12)"
                >
                  <animate
                    attributeName="r"
                    begin="0.125s"
                    calcMode="spline"
                    dur="1s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  ></animate>
                </circle>
                <circle
                  cx="12"
                  cy="2"
                  r="0"
                  fill="#edf0f8"
                  transform="rotate(90 12 12)"
                >
                  <animate
                    attributeName="r"
                    begin="0.25s"
                    calcMode="spline"
                    dur="1s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  ></animate>
                </circle>
                <circle
                  cx="12"
                  cy="2"
                  r="0"
                  fill="#edf0f8"
                  transform="rotate(135 12 12)"
                >
                  <animate
                    attributeName="r"
                    begin="0.375s"
                    calcMode="spline"
                    dur="1s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  ></animate>
                </circle>
                <circle
                  cx="12"
                  cy="2"
                  r="0"
                  fill="#edf0f8"
                  transform="rotate(180 12 12)"
                >
                  <animate
                    attributeName="r"
                    begin="0.5s"
                    calcMode="spline"
                    dur="1s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  ></animate>
                </circle>
                <circle
                  cx="12"
                  cy="2"
                  r="0"
                  fill="#edf0f8"
                  transform="rotate(225 12 12)"
                >
                  <animate
                    attributeName="r"
                    begin="0.625s"
                    calcMode="spline"
                    dur="1s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  ></animate>
                </circle>
                <circle
                  cx="12"
                  cy="2"
                  r="0"
                  fill="#edf0f8"
                  transform="rotate(270 12 12)"
                >
                  <animate
                    attributeName="r"
                    begin="0.75s"
                    calcMode="spline"
                    dur="1s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  ></animate>
                </circle>
                <circle
                  cx="12"
                  cy="2"
                  r="0"
                  fill="#edf0f8"
                  transform="rotate(315 12 12)"
                >
                  <animate
                    attributeName="r"
                    begin="0.875s"
                    calcMode="spline"
                    dur="1s"
                    keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
                    repeatCount="indefinite"
                    values="0;2;0;0"
                  ></animate>
                </circle>
              </svg>
            </div>
          </div>
        )}
        <form className={styles.form} onSubmit={e => handleSubmit(e)}>
          <h2>Generator Fiszek</h2>

          <label htmlFor="key">
            <a
              href="https://platform.openai.com/account/api-keys"
              target="_blank"
            >
              Klucz
            </a>{" "}
            do chatuGPT
          </label>
          <input
            id="key"
            type="password"
            defaultValue={key}
            onChange={e => setKey(e.target.value)}
            required
          />

          <label htmlFor="title">Nazwa zestawu fiszek</label>
          <input
            id="title"
            type="text"
            onChange={e => setTitle(e.target.value)}
            required
          />

          <label htmlFor="file">Plik CSV</label>
          <input
            id="file"
            type="file"
            accept=".csv"
            onChange={e => handleCsv(e)}
            required
          />

          <p></p>
          <button className={styles.form__btn} type="submit">
            <div className="btn_cta">Generuj</div>
          </button>
          <Link href="/generated-cards" className="btn">
            Wygenerowane ostatnio
          </Link>
        </form>
      </div>
    </Layout>
  )
}
