import React from 'react'
import {FaTwitter} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {motion} from 'framer-motion'
import './nabar.css'
import { HashLink as Link } from 'react-router-hash-link';


const Navbar = () => {



const logoAnimate ={
hidden:{
y:'-100vh'

},
visible:{
  y:0,
  transition:{
    type:'spring',
    stiffness:70,
    duration:1

  }
}

}
const mediaAnimate ={
hidden:{
opacity:0

},
visible:{
  opacity:1,
 transition: {delay:1.2 , duration:1 }
}

}




const variants ={
hover :{
  letterSpacing:'6.5px',
  originX:0,
  transition:{
    type:'spring',duration:1
  }
},
hidden:{
  x:'100vw'
},
visible1:
{
  x:0
  ,
  transition:{type:'spring',stiffness:60,delay:2.1}
},
visible2:
{
  x:0
  ,
  transition:{type:'spring',stiffness:60,delay:2.2}
},
visible3:
{
  x:0
  ,
  transition:{type:'spring',stiffness:60,delay:2.3}
},
visible4:
{
  x:0
  ,
  transition:{type:'spring',stiffness:60,delay:2.4}
}
}


const handleSlide = () =>{

document.querySelector('.side-nav').classList.add('slide')

}
const handleClose = () =>{

document.querySelector('.side-nav').classList.remove('slide')

}




  return (
    <div className='container-fluid logo-nav d-flex  justify-content-between align-items-start position-relative
'>
        <motion.h3
        variants={logoAnimate}
        initial='hidden'
        animate="visible"
        >
            Portfolio
        </motion.h3>
        <div className='nav d-flex  justify-content-center align-items-start '>



         <motion.div className='media d-flex align-items-center justify-content-between  me-sm-2  '
          variants={mediaAnimate}
        initial='hidden'
        animate="visible"
         
         >
       <a href='https://twitter.com/KhalidW21071148?t=5LX4gw0O75M1yk-Gr210Ig&s=35' target='blank'> <motion.p whileHover={{y:-5}}><FaTwitter size={25}/></motion.p> </a>
       <a href='https://www.instagram.com/khalidwalid218/' target='blank' > <motion.p whileHover={{y:-5}} className='ms-xl-5 ms-sm-2' ><FiInstagram size={25}/></motion.p> </a>
       <a href='https://www.youtube.com/channel/UC7y5seAqt5Wmg7DV0bEghCA' target='blank' > <motion.p whileHover={{y:-5}} className='ms-xl-5 ms-sm-2'><BsYoutube size={25}/></motion.p> </a>
         </motion.div>
         



         
        </div>
<div className='responsive-menu position-fixed'>
<svg onClick={handleSlide} className='dots' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512">
   <motion.path
   initial={{pathLength:0 , fillOpacity:0}}
   animate={{pathLength:1 , fillOpacity:1}}
   transition={{delay:1.5 , duration:1.5}}
             
   d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z"/>
   </svg>
</div>



<div className='side-nav ms-xl-5 ms-sm-2 text-center position-fixed'>
  
    
   <svg onClick={handleClose} className='close-button' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
<motion.p 
variants={variants}
whileHover="hover"
initial="hidden"
animate='visible1'
className='mt-4'

><Link to='#about'smooth >about me </Link></motion.p>
<motion.p 
variants={variants}
whileHover="hover"
initial="hidden"
animate="visible2"
  

><Link to='#projects'smooth >projects</Link> </motion.p>
<motion.p 
variants={variants}
whileHover="hover"
initial="hidden"
animate="visible3"

><Link to='#contact' smooth>contact </Link></motion.p>

         </div>


    </div>
  )
}

export default Navbar