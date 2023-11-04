/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react"
import Layout from "@/components/Layout"
import nookies from "nookies"
import styles from "/src/styles/cards.module.css"

export default function playground() {
  const [res, setRes] = useState({})
  const [data, setData] = useState([])
  const [cardReview, setCardReview] = useState([])
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    const localRes = JSON.parse(JSON.parse(localStorage.getItem("res")))
    setRes(localRes)
  }, [])

  useEffect(() => {
    document.querySelector("body").style.overflowY =
      cardReview.length > 0 ? "hidden" : "auto"
  }, [cardReview])

  useEffect(() => {
    if (res.data) {
      const parse = JSON.parse(res.data)
      const parseDot = parse.map(item => {
        let sentence = item.sentence
        let sentence2 = item.sentence2

        if (sentence.slice(-1) === ".") {
          sentence = sentence.slice(0, -1)
        }

        if (sentence2.slice(-1) === ".") {
          sentence2 = sentence2.slice(0, -1)
        }

        return {
          sentence,
          sentence2,
        }
      })
      setData(parseDot.slice(0, -1))
    }
  }, [res])

  const card = data.map((item, i) => {
    return (
      <div key={i} className={styles.card_pair}>
        <div className={styles.card}>
          <p dangerouslySetInnerHTML={{ __html: item.sentence }}></p>
        </div>
        <div className={styles.card}>
          <p dangerouslySetInnerHTML={{ __html: item.sentence2 }}></p>
        </div>
      </div>
    )
  })

  const exportCSV = () => {
    let csvData = ""

    data.map(item => {
      let sentence = item.sentence
      let sentence2 = item.sentence2

      if (sentence.includes("<span>")) {
        sentence = sentence.replace("<span>", "")
        sentence = sentence.replace("</span>", "")
      }

      if (sentence2.includes("<span>")) {
        sentence2 = sentence2.replace("<span>", "")
        sentence2 = sentence2.replace("</span>", "")
      }

      csvData += `${sentence}, ${sentence2}\n`
    })

    const exportFilename = res.title + ".csv" || "export.csv"
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" })

    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(blob, exportFilename)
    } else {
      const link = document.createElement("a")
      if (link.download !== undefined) {
        const url = URL.createObjectURL(blob)
        link.setAttribute("href", url)
        link.setAttribute("download", exportFilename)
        link.style.visibility = "hidden"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    }
  }

  const preview = () => {
    setCardReview(data)
  }

  const previewRepeat = () => {
    let deck = [...cardReview]
    deck.push(deck[0])
    deck.shift()
    setCardReview(deck)
    setShowAnswer(false)
  }

  const previewNext = () => {
    let deck = [...cardReview]
    deck.shift()
    setShowAnswer(false)
    setCardReview(deck)
  }

  const goBack = () => {
    setCardReview([])
  }

  return (
    <Layout title={res.title}>
      <div className="wrapper container">
        {cardReview.length > 0 && (
          <div className={`${styles.cards_review} wrapper`}>
            <div
              className={styles.cards_review__container}
              onClick={() => setShowAnswer(true)}
            >
              <div
                className={styles.cards_review__goback}
                onClick={() => goBack()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#edf0f8"
                    d="M12 9.059V6.5a1.001 1.001 0 00-1.707-.708L4 12l6.293 6.207a.997.997 0 001.414 0A.999.999 0 0012 17.5v-2.489c2.75.068 5.755.566 8 3.989v-1c0-4.633-3.5-8.443-8-8.941z"
                  ></path>
                </svg>
                Wróć
              </div>
              <div className={`${styles.cards_review__card} ${styles.card}`}>
                {" "}
                <p
                  dangerouslySetInnerHTML={{ __html: cardReview[0].sentence }}
                ></p>
              </div>
              {showAnswer && (
                <div className={`${styles.cards_review__card} ${styles.card}`}>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: cardReview[0].sentence2,
                    }}
                  ></p>
                </div>
              )}
            </div>

            <div className={styles.cards_review__buttons}>
              <div className="btn" onClick={() => previewRepeat()}>
                Powtórz
              </div>
              <div className="btn_cta" onClick={() => previewNext()}>
                Umiem
              </div>
            </div>
          </div>
        )}
        <div className={styles.header}>
          <div className={styles.header__div}>
            <h1>{res.title}</h1>
            <div className={styles.header__div__svg} onClick={() => preview()}>
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 0C12.8355 0 9.74207 0.938383 7.11088 2.69649C4.4797 4.45459 2.42894 6.95344 1.21793 9.87706C0.00693254 12.8007 -0.309921 16.0177 0.307443 19.1214C0.924806 22.2251 2.44866 25.0761 4.6863 27.3137C6.92394 29.5513 9.77487 31.0752 12.8786 31.6926C15.9823 32.3099 19.1993 31.9931 22.1229 30.7821C25.0466 29.5711 27.5454 27.5203 29.3035 24.8891C31.0616 22.2579 32 19.1645 32 16C32 13.8988 31.5861 11.8183 30.7821 9.87706C29.978 7.93585 28.7994 6.17203 27.3137 4.68629C25.828 3.20055 24.0641 2.022 22.1229 1.21793C20.1817 0.413852 18.1012 0 16 0ZM12.8 23.2V8.8L22.4 16L12.8 23.2Z"
                  fill="#D6C395"
                />
              </svg>
            </div>
          </div>
          <div className={styles.header__div}>
            <button className="btn" onClick={() => exportCSV()}>
              Pobierz
            </button>
            {false && (
              <button className="btn" style={{ "--btn-clr": "var(--warning)" }}>
                Usuń
              </button>
            )}
          </div>
        </div>
        <div>{card}</div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx)
  if (!cookies.res) {
    return {
      redirect: {
        permanent: false,
        destination: "/generator",
      },
      props: {},
    }
  } else {
    return {
      props: {},
    }
  }
}
