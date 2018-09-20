import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import axios from "axios"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get("/api/products").then((res) => {
      console.log(res)
      this.setState({ products: res })
    })
  }

  render() {
    return <div className="App" />
  }
}

export default App
