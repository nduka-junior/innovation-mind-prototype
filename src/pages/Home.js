import React from 'react'
import Nav from '../components/Nav'
import Query from './Query'
import SelectLang from '../components/SelectLang'

function Home() {
  return (
      <div>
          <Nav />
          <SelectLang />
          <Query />
    </div>
  )
}

export default Home