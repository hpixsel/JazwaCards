import React from "react"
import NavBar from "../NavBar"
import Footer from "../Footer"
import Head from "next/head"

export default function Layout({ children, title = "JaźwaCards" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Odkryj nowy sposób nauki dzięki generowanym przy pomocy sztucznej inteligencji fiszkom na naszej stronie."
        />
        <meta
          name="keywords"
          content="fiszki, anki fiszki, jak zrobić fiszki, własne fiszki, fiszki angielski"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Polish" />
        <meta name="author" content="Kacper Adamus & Kacper Janusz"></meta>
      </Head>
      <div className="body">
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  )
}
