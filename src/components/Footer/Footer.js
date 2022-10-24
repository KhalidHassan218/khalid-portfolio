import React,{useEffect} from 'react'
import './footer.css'
import {FaTwitter} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import { HashLink as Link } from 'react-router-hash-link';







const Footer = () => {

const handleMousePos=(e) =>{
const cursor = document.querySelector("#mouse")
const hover = document.querySelector('.name')
const hoverTwo = document.querySelector('#contact h1')
const {pageX:posX ,  pageY:posY } = e

const runMouseOver = () =>{
cursor.style.transform='scale(4)'
cursor.style.background='blue'
cursor.style.display='block'

} 
hover.addEventListener('mouseenter',runMouseOver)
hoverTwo.addEventListener('mouseenter',runMouseOver)

const runMouseLeave = () =>{
cursor.style.transform=''
cursor.style.background=''
cursor.style.display='none'

}
hover.addEventListener('mouseleave',runMouseLeave)
hoverTwo.addEventListener('mouseleave',runMouseLeave)


    cursor.style.left= `${posX -10}px`
    cursor.style.top= `${posY -10}px`

}
















    useEffect(() => {
  document.addEventListener('mousemove',handleMousePos)
console.log('effect')
  return () => {
   document.removeEventListener('mousemove',handleMousePos)
    
  }
},)



  return (
    <div className='footer p-4 d-flex align-items-center justify-content-between flex-lg-row flex-md-row flex-column '>
        <div id='mouse'></div>
<h1 className='name'>khalid walid hassan</h1>
<div className='important  align-items-center justify-content-around  d-lg-flex d-md-flex d-none'>
<p><Link to="#about" smooth>about me</Link></p>
<p><Link to="#projects" smooth>projects</Link></p>

</div>
<div className='media d-lg-flex align-items-center justify-content-between  justify-md-content-around justify-sm-content-between'>
    <a href='https://twitter.com/KhalidW21071148?t=5LX4gw0O75M1yk-Gr210Ig&s=35' target='blank'> <FaTwitter   className='footer-icon' size={20}/> </a>
<a href='https://www.youtube.com/channel/UC7y5seAqt5Wmg7DV0bEghCA'target='blank' ><BsYoutube  className='footer-icon'  size={20}/></a>
<a href='https://www.instagram.com/khalidwalid218/' target='blank' ><FiInstagram className='footer-icon' size={20}/></a>


</div>

    </div>
  )
}

export default Footer