import React from "react"
import styles from "./tutorial.module.css"
import Link from "next/link"

export default function Tutorial() {
  return (
    <section className={`wrapper ${styles.tutorial}`}>
      <h3>
        W jaki sposób zamierzamy <span>Ci</span> pomóc?
      </h3>
      <p>
        Fiszki to bardzo efektywny i sprawdzony przez wielu sposób uczenia się
        różnych języków. Uważamy jednak, że da się to jeszcze bardziej
        usprawnić, czasem ciężko jest zapamiętać niektóre ze słówek bez
        odpowiedniego kontekstu i tu wkraczamy my. Wystarczy, że dodasz swój
        &nbsp;
        <a href="https://platform.openai.com/account/api-keys" target="_blank">
          klucz od chatuGPT
        </a>{" "}
        i zaimportujesz swój plik csv z wypisanymi słówkami a nasz system na ich
        podstawie wygeneruje zdania, które pomogą Ci szybciej zapamiętać ich
        znaczenie.
      </p>

      <Link href="/generator" className={styles.tutorial__cta}>
        <div className="btn_cta">Zacznij generować</div>
      </Link>

      <div className={styles.tutorial__bg}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="294"
          height="274"
          viewBox="0 0 294 274"
          fill="none"
        >
          <path
            d="M187.75 13.3333H202.333C206.201 13.3333 209.91 14.8698 212.645 17.6047C215.38 20.3396 216.917 24.0489 216.917 27.9167V78.9583M260.667 42.5C264.517 44.1333 268.25 45.6646 271.867 47.0938C275.427 48.6044 278.241 51.4672 279.69 55.0526C281.14 58.6379 281.106 62.6522 279.596 66.2125L246.083 144.583M21.5583 59.9563L125.654 14.6167C127.372 13.8804 129.22 13.4956 131.088 13.4847C132.957 13.4739 134.809 13.8373 136.535 14.5536C138.261 15.2699 139.827 16.3245 141.139 17.6552C142.451 18.986 143.483 20.566 144.175 22.3021L215.983 195.873C217.476 199.393 217.527 203.358 216.125 206.914C214.723 210.471 211.98 213.335 208.488 214.89L104.406 260.229C102.688 260.968 100.839 261.354 98.9683 261.366C97.0979 261.378 95.2441 261.015 93.5162 260.299C91.7884 259.583 90.2217 258.527 88.9086 257.195C87.5954 255.863 86.5625 254.282 85.8708 252.544L14.0625 78.9583C12.5699 75.4387 12.5192 71.4737 13.9211 67.917C15.3231 64.3602 18.0657 61.5109 21.5583 59.9563Z"
            stroke="#EDF0F8"
            strokeWidth="25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}
