import React from "react"
import PropTypes from "prop-types"
import { Info } from "./Styles/InfoStyles"

const Info_Basic = loopen => {
  return (
    <Info>
      <img src={loopen.node.acf.logo.source_url} alt="Logo" />
      <h1>{loopen.node.acf.hero_headline} </h1>

      <p>{loopen.node.acf.hero_subtext} </p>
      <a href={"mailto:" + loopen.node.acf.hero_contact}>
        {loopen.node.acf.hero_contact}
      </a>
      <a href={"tel:" + loopen.node.acf.hero_phone}>
        {loopen.node.acf.hero_phone}
      </a>
    </Info>
  )
}

export default Info_Basic
