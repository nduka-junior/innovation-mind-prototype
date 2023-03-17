import React from 'react'
import Nav from '../components/Nav'
import Query from './Query'
import SelectLang from '../components/SelectLang'
import ImageSide from '../components/ImageSide';

function Home() {
  return (
    <div>
      <Nav />
      <div className='image_pos'>
        <ImageSide />
        <SelectLang />
      </div>
    </div>
  );
}

export default Home