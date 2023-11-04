import React, { useState } from "react"
import styles from "./navbar.module.css"
import Link from "next/link"

export default function NavBar() {
  const [open, setOpen] = useState(false)

  const navMenu = () => {
    setOpen(prevState => !prevState)
    document.querySelector("body").style.overflowY = open ? "auto" : "hidden"
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.bg}>
        <div className={`wrapper ${styles.nav_wrapper}`}>
          <Link href="/">
            <div className={styles.nav__logo}>
              <div className={styles.nav__logo_svg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 36 32"
                  fill="none"
                >
                  <g clipPath="url(#clip0_14_41)">
                    <path
                      d="M4.67809 20.1179L16.7268 14.7815C17.4309 14.4697 18.2525 14.4862 18.9414 14.826L31.3413 20.9429C33.1332 21.8269 33.0685 24.2314 31.2312 25.0311L18.9698 30.3681C18.2631 30.6757 17.4411 30.6538 16.7545 30.3091L4.56725 24.1917C2.79613 23.3027 2.86089 20.9227 4.67809 20.1179Z"
                      stroke="#EDF0F8"
                      strokeWidth="3"
                    />
                    <path
                      d="M4.37035 13.8321L16.4191 8.49572C17.1232 8.18389 17.9447 8.20041 18.6336 8.54024L31.0335 14.6572C32.8255 15.5411 32.7608 17.9456 30.9235 18.7453L18.662 24.0823C17.9553 24.3899 17.1334 24.3681 16.4467 24.0234L4.25951 17.906C2.48839 17.0169 2.55315 14.637 4.37035 13.8321Z"
                      stroke="#D6C395"
                      strokeWidth="3"
                    />
                    <path
                      d="M4.37035 6.97508L16.4191 1.63868C17.1232 1.32684 17.9447 1.34335 18.6336 1.68318L31.0335 7.80011C32.8255 8.68405 32.7608 11.0886 30.9235 11.8883L18.662 17.2253C17.9553 17.5329 17.1334 17.511 16.4467 17.1663L4.25951 11.0489C2.48839 10.1599 2.55315 7.77994 4.37035 6.97508Z"
                      stroke="#EDF0F8"
                      strokeWidth="3"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_14_41">
                      <rect width="35.6923" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className={styles.nav__logo_text}>JaźwaCards</p>
            </div>
          </Link>
          <div className={`${styles.nav__links} ${open ? styles.open : ""}`}>
            <Link href="/">
              <div className={styles.link}>Strona Główna</div>
            </Link>
            <Link href="/konto">
              <div className={styles.link}>Konto</div>
            </Link>
            <Link href="/generator" className={styles.nav__btn_cta}>
              <div className="btn_cta">
                Generuj
                <div className={styles.btn_cta_svg}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <rect x="2" y="2" width="13" height="13" fill="#0D1321" />
                    <path
                      d="M15.8125 0H1.4375C1.05625 0 0.690617 0.15145 0.421034 0.421034C0.15145 0.690617 0 1.05625 0 1.4375V15.8125C0 16.1937 0.15145 16.5594 0.421034 16.829C0.690617 17.0985 1.05625 17.25 1.4375 17.25H15.8125C16.1937 17.25 16.5594 17.0985 16.829 16.829C17.0985 16.5594 17.25 16.1937 17.25 15.8125V1.4375C17.25 1.05625 17.0985 0.690617 16.829 0.421034C16.5594 0.15145 16.1937 0 15.8125 0ZM13.6562 9.34375H9.34375V13.6562C9.34375 13.8469 9.26803 14.0297 9.13323 14.1645C8.99844 14.2993 8.81562 14.375 8.625 14.375C8.43438 14.375 8.25156 14.2993 8.11677 14.1645C7.98198 14.0297 7.90625 13.8469 7.90625 13.6562V9.34375H3.59375C3.40313 9.34375 3.22031 9.26803 3.08552 9.13323C2.95073 8.99844 2.875 8.81562 2.875 8.625C2.875 8.43438 2.95073 8.25156 3.08552 8.11677C3.22031 7.98198 3.40313 7.90625 3.59375 7.90625H7.90625V3.59375C7.90625 3.40313 7.98198 3.22031 8.11677 3.08552C8.25156 2.95073 8.43438 2.875 8.625 2.875C8.81562 2.875 8.99844 2.95073 9.13323 3.08552C9.26803 3.22031 9.34375 3.40313 9.34375 3.59375V7.90625H13.6562C13.8469 7.90625 14.0297 7.98198 14.1645 8.11677C14.2993 8.25156 14.375 8.43438 14.375 8.625C14.375 8.81562 14.2993 8.99844 14.1645 9.13323C14.0297 9.26803 13.8469 9.34375 13.6562 9.34375Z"
                      fill="#EDF0F8"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
          <div className={styles.nav__menu} onClick={() => navMenu()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 22"
              fill="none"
            >
              <path
                d="M2 20.1818H26M2 11.0909H26M2 2H26"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  )
}
