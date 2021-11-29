import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import Home from "../components/Home/home"
import ConcertsSection from "../components/ConcertsSection/concertssection"
import Members from "../components/Members/members"
import Contact from "../components/Contact/contact"

const IndexPage = ({ data }) => (
  <Layout >
    <Home></Home>
    <ConcertsSection></ConcertsSection>
    <Members></Members>
    <Contact></Contact>
  </Layout>
)

export default IndexPage
