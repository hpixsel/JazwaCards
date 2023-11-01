/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout"
import React, { useEffect, useState } from "react"
import styles from "/src/styles/form.module.css"

export default function register() {
  const [key, setKey] = useState("")
  const [title, setTitle] = useState("")
  const [csv, setCsv] = useState("")

  useEffect(() => {
    console.log(key, title, csv)
  }, [key, title, csv])

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

      setCsv(parseData)
    })

    reader.readAsText(file)
  }

  return (
    <Layout>
      <div className={`wrapper container ${styles.form_container}`}>
        <form className={styles.form}>
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
            type="text"
            onChange={e => setKey(e.target.value)}
            required
          />

          <label htmlFor="title">Nazwa zestawu fiszek</label>
          <input
            id="title"
            type="text"
            onChange={e => setTitle(e.target.value)}
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
        </form>
      </div>
    </Layout>
  )
}
