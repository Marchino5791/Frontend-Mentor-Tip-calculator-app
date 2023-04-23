import React from "react"

// components
import Main from "./components/Main"

// img
import logo from "./assets/logo.svg"

function App() {

  return (
    <>
      <img alt="Splitter's Logo" src={logo} className="my-12 mx-auto lg:mt-0 lg:mb-24" />
      <Main />
    </>
  )
}

export default App