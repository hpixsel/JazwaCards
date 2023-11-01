/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout"
import React, { useState } from "react"
import styles from "/src/styles/konto.module.css"
import Card from "@/components/Card"

export default function konto() {
  const [wrap, setWrap] = useState(false)

  const wrapHandle = () => {
    setWrap(prevState => !prevState)
  }

  return (
    <Layout>
      <div className={`container wrapper ${styles.account}`}>
        <div className={`${styles.user} ${wrap ? "" : styles.user_wrap}`}>
          <div className={styles.user__name} onClick={() => wrapHandle()}>
            <h4>Username</h4>
            <div className={styles.user__name_svg}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="10"
                viewBox="0 0 20 10"
                fill="none"
              >
                <g clipPath="url(#clip0_12_341)">
                  <path
                    d="M0.165295 8.37662L0.165295 10L20 10L20 8.37662L18.3471 8.37662L18.3471 6.75325L16.6942 6.75325L16.6942 5.12988L15.0413 5.12988L15.0413 3.50649L13.3884 3.50649L13.3884 1.88313L11.7355 1.88313L11.7355 0.25974L8.42977 0.25974L8.42977 1.88313L6.77686 1.88313L6.77686 3.50649L5.12399 3.50649L5.12399 5.12988L3.47108 5.12988L3.47108 6.75324L1.81817 6.75324L1.81817 8.37662"
                    fill="#D6C395"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12_341">
                    <rect
                      width="20"
                      height="10"
                      fill="white"
                      transform="translate(20 10) rotate(-180)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className={styles.user__data}>
            <p>
              <b>Email:</b> username@gmail.com
            </p>
            <p>
              <b>Liczba zestawów:</b> 4
            </p>
            <p>
              <b>Liczba słówek:</b> 726
            </p>
            <a href="/logout" className={styles.user__btn}>
              <div className="btn_cta">Wyloguj</div>
            </a>
          </div>
        </div>
        <div className={styles.cards}>
          <Card name="Angielski - unit 13-14" />
          <Card name="Niemiecki Verkehrsmittel" />
          <Card name="Infotech Internet" />
          <Card name="Phrasal verbs" />
          <Card name="Niemiecki Wetter" />
        </div>
      </div>
    </Layout>
  )
}
