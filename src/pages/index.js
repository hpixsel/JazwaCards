import Hero from "@/components/Hero"
import Layout from "@/components/Layout"
import Tutorial from "@/components/Tutorial"
import React from "react"

export default function index() {
  return (
    <Layout title="JaźwaCards">
      <div className="container">
        <Hero />
        <Tutorial />
      </div>
    </Layout>
  )
}
