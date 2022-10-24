import React from 'react'
import './about.css'
import personal from '../../Assets/personal.jpg'
import {AiOutlineDownload} from 'react-icons/ai'
import {GrLinkedin} from 'react-icons/gr'
import {TiHtml5} from 'react-icons/ti'
import {SiCss3 ,SiMaterialui , SiFramer} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {FaBootstrap , FaReact} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

import { motion } from "framer-motion";

const About = () => {






const squareVariants = {
  visible: { opacity: 1,  transition: { when:"beforeChildren", type:"tween", staggerChildren:0.75 ,  timingFunction:'cubic-bezier(0, .79, .65, .99)' } },
  hidden: { opacity: 0,  }
};


const first = {
  visible: {  opacity:1, transition:{type:'tween',duration:1,timingFunction:'cubic-bezier(0, .79, .65, .99)'}  },
  hidden: { opacity:0  }
};

const second = {
  visible: { opacity:1 ,transition:{type:'tween' ,duration:1 ,timingFunction:'cubic-bezier(0, .79, .65, .99)'}   },
  hidden: {  opacity:0 }
};

const third = {
  visible: { opacity:1 , transition:{type:'tween' ,duration:1,timingFunction:'cubic-bezier(0, .79, .65, .99)'}  },
  hidden: {  opacity:0 }
};



  return (
    <motion.div id='about'  className='about'
      initial='hidden'
      whileInView='visible'
      variants={squareVariants}
    
    > 
    <div className='container text-center'>
        <h1 >
            About Me 
        </h1>
 <motion.div className='row justify-content-between align-items-center mt-2 mb-4 pt-2 pb-4 '    
 >
<motion.div className='col-xl-3 col-lg-3 col-md-12 col-sm-12 first-col '
variants={first}

>
    <div  className='image-container'>
    <img src={personal} alt='personal ' loading='lazy'/>
    </div>
    <h3>Khalid Walid Hassan</h3>
     <a className='cv' href='/khalid_porfolio_frontend.pdf' download>Download My Cv <AiOutlineDownload size={25}/></a>
     <a className='linked-in' href='https://www.linkedin.com/in/khalid-hassan-928059213/' target='blank'>Linked-In <GrLinkedin size={20}/></a>
</motion.div>
<motion.div className='col-xl-5 col-lg-5 col-md-12 col-sm-12 second-col  '
variants={third}

>
    <p>Welcome , I am a continuous learning front-end developer with more than one year working experince on several projects for instance,<span className='hover-animate'><a href='https://headphones-ecommerce-website-btdp.vercel.app/' target='blank'>ecommerce </a>  </span> websites ,<span className='hover-animate' ><a href='https://explore-dubai.vercel.app/' target='blank' > animated </a> </span> websites, <span className='hover-animate'><a href='https://pizza-hut-full-website.vercel.app/' target='blank'>  cloned </a></span> websites and other wonderful projects , I am looking forward to join a great company to enhance my experince and indulge more into the field . Check out my <BsGithub size={20} color='black'/> <a href='https://github.com/KhalidHassan218' target='blank'> <span className='github'> GitHub
    <svg viewBox="0 0 70 36">
            <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
        </svg>
       
    
    </span> </a>  and my youtube channel <span className='hover-animate'><a href='https://www.youtube.com/channel/UC7y5seAqt5Wmg7DV0bEghCA'  target='blank'>Codeasy </a></span>  or simply <span className="wrapper">
  <span className="inner">
    
    <a href="mailto: khalidhassan218@outlook.com?subject=Hiring you" className="hover-shadow hover-color hire"><span>H</span><span>i</span><span>r</span><span>e</span> <span> </span> <span>m</span><span>e</span></a>
    
  </span>
  
  
</span>
   </p>
</motion.div>
<motion.div className={'col-xl-3 col-lg-3 col-md-12 col-sm-12 third-col  '}
variants={second}

>
    <div className='lang'>
     <h2 className='m-0 '>I Use : </h2>
     <div className='logos d-flex justify-content-center align-items-center p-4 mt-1'>
    <TiHtml5 size={60}/> <SiCss3 size={60}/> <IoLogoJavascript size={60}/> <FaBootstrap size={60}/> <SiMaterialui size={60}/> <FaReact size={60}/> <SiFramer size={60}/> 
     </div>
     <h3>Work with me 😇 (Freelancer) at : </h3>
<div className='freelance d-flex justify-content-center align-items-center p-4 mt-1'>
 <a href='https://www.fiverr.com/khalid_hassan22/build-your-website-as-a-frontend'>Fiverr</a> ,<a href='https://www.upwork.com/freelancers/~019794039f0031df93?viewMode=1'>UpWork</a>
     </div>
    </div>
</motion.div>
<div>

</div>

 </motion.div>

</div>
    </motion.div>
  )
}

export default About