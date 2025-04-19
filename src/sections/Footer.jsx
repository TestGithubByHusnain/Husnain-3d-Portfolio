import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
<div className='flex flex-col justify-center md:items-start'>
<a href="/">Visit my Social Accounts</a>
</div>
<div className='socials'>
{socialImgs.map((img) =>(
    <a className='icon' target='_blank' href={img.url} key={img.url}>
        <img src={img.imgPath}/>
    </a>
))}
</div>
<div className='flex flex-col justify-center md:items-start items-center'>
<p className='text-center md:text-end'>
© {new Date().getFullYear()} Husnain | Ali. All rights reserved.
</p>
</div>
      </div>
    </footer>
  )
}

export default Footer
