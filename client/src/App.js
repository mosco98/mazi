import React, { Component } from 'react'

import Header from './components/Header'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="mt-10">
          <div className="card">
            <p>Hello</p>
          </div>
        </section>
      </div>
    )
  }
}
