import React, { ReactElement } from 'react'
import Header from '../Header'
import './style.css'

const Home = (): ReactElement => (
  <main>
    <Header />
    <section className='home-content'>
      <h1>Hi, I'm Chris</h1>
      <h2>A passionate technophile with an eye for detail.</h2>
    </section>
  </main>
)

export default Home
