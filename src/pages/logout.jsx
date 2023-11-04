/* eslint-disable react-hooks/rules-of-hooks */
import Layout from "@/components/Layout"
import { useRouter } from "next/router"
import React, { useEffect } from "react"

export default function logout() {
  const router = useRouter()
  useEffect(() => {
    async function logout() {
      await fetch("/api/logout").then(router.push("/"))
    }
    logout()
  }, [router])

  return (
    <Layout>
      <div
        className="wrapper container"
        style={{ display: "grid", placeContent: "center" }}
      >
        <h1>Wylogowywanie</h1>
      </div>
    </Layout>
  )
}
