import React from 'react'
import standing from '../Static/Image/standing.png'
function ImageSide() {
  return (
      <div className='image_side'>
          <div className='image_side_color'></div>
      <img src={standing} alt="standing" />
    </div>
  );
}

export default ImageSide