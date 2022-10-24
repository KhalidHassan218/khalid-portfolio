import React,{useEffect,useState} from 'react'
import './projects.css'
import {MdSwipe} from 'react-icons/md'
import {BsGrid3X3GapFill} from 'react-icons/bs'
import pizzahut from '../../Assets/Pizza Hut.png' 
import fitnessApp from '../../Assets/fitness-react-app.png' 
import wilsonEcommerce from '../../Assets/wilson-ecommerce.png' 
import headphonesEcommerce from '../../Assets/ecommerce-headphones.png' 
import ingFree from '../../Assets/ing-free.png' 
import ParallaxEgypt from '../../Assets/parallax-egypt.png' 
import bootstrapp from '../../Assets/bootstrap website.png' 
import reactCalculator from '../../Assets/calculator.png' 
import ecommerceConverse from '../../Assets/ecommerce-converse-shoe.png' 
import ExploreDubai from '../../Assets/Explore Dubai.png' 
import kasper from '../../Assets/kasper.png' 
import nightCity from '../../Assets/night city parallax.png' 
import orbit from '../../Assets/orbit.png' 
import PassGenerator from '../../Assets/password-generator.png' 
import reactToDo from '../../Assets/react-to-do-list.png' 
import TravelAgency from '../../Assets/travel agency website.png' 
import premiumToDo from '../../Assets/premium to do list.png' 
import temp1 from '../../Assets/tempelate 1.png' 
import temp3 from '../../Assets/tempelate 3.png' 
import talabat from '../../Assets/talabat.png' 
import Glide from '@glidejs/glide'
import { motion } from 'framer-motion'
import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
import {AiOutlineRight,AiOutlineLeft} from 'react-icons/ai'
import {BiLinkExternal} from 'react-icons/bi'
import {Pagination} from '@mui/material';

const Projects = () => {
const [toggle, settoggle] = useState(true)

const data = [
{
image : pizzahut,
title:'pizza hut nextjs',
link:'https://pizza-hut-full-website.vercel.app/'

},
{
image : fitnessApp,
title:'fitness app reactjs',
link:'https://react-fitness-app-f6no.vercel.app/'

},
{
image : wilsonEcommerce,
title:'basket ball ecommerce nextjs',
link:'https://full-next-basketball-ecommerce-website.vercel.app/'

},
{
image : premiumToDo,
title:'premium To-Do list',
link:'https://premium-to-do-list-4ydu.vercel.app/'

},
{
image : headphonesEcommerce,
title:'headphones ecommerce',
link:'https://headphones-ecommerce-website-btdp.vercel.app/'

},
{
image : ingFree,
title:'ingredient free api website ',
link:'https://react-ingredient-free-website-ofqo.vercel.app/'

},
{
image : ParallaxEgypt,
title:'egypt parallax ',
link:'https://welcome-to-egypt-parallax-website.vercel.app/'

},
{
image : bootstrapp,
title:'bootstrap based website',
link:'https://bootstrap-website-7r74.vercel.app/'

},
{
image : reactCalculator,
title:'react calculator app',
link:'https://react-calculator-ochre-five.vercel.app/'

},
{
image : ecommerceConverse,
title:'ecommerce converse shoe website',
link:'https://converse-shoe-ecommerce.vercel.app/'

},
{
image : ExploreDubai,
title:'explore dubai parallax',
link:'https://explore-dubai.vercel.app/'

},
{
image : kasper,
title:'kasper',
link:'https://kasper-website-template2-5lgx.vercel.app/'

},
{
image : nightCity,
title:'night city parallax',
link:'https://city-night-parallax-gu5x.vercel.app/'

},
{
image : orbit,
title:'orbit video and audio website',
link:'https://to-space-video-audio.vercel.app/'

},
{
image : PassGenerator,
title:'complex password generator',
link:'https://password-generator-ckwt.vercel.app/'

},
{
image : reactToDo,
title:'react To-Do list',
link:'https://react-to-do-list-mczo.vercel.app/'

},
{
image : TravelAgency,
title:'travel agency',
link:'https://travel-agency-website-html-css-js-x5kz.vercel.app/'

},

{
image : temp1,
title:'tempelate 1',
link:'https://tempelate-1-using-html-css-js-23ci.vercel.app/'

},
{
image : temp3,
title:'tempelate 3',
link:'https://tempelate-3-html-css-js-ys1o.vercel.app/'

},
{
image : talabat,
title:'talabat landing page',
link:'https://talabat-landpage.vercel.app/'

}


]

const [currentPage, setcurrentPage] = useState(1)
const shownCards = 6
const indexOfLastElement  = currentPage * shownCards
const indexOfFirstElement = indexOfLastElement - shownCards


useEffect(() => {

         new Glide(".images",{
            type: 'carousel',
            perView: 2,
             
            focusAt: 'center',
            gap: 40,
            breakpoints: {
              1200:{
                perView: 1
              },
              800:{
                perView: 1
              }
            },
           
          }).mount();
    
 





},[])    



const handlePagination =(e,value)=>{
    let scrollToPage = document.querySelector('.projects').getBoundingClientRect()
let offset = scrollToPage.top + window.pageYOffset
    setcurrentPage(value)

    window.scrollTo({top:offset , behavior:'smooth'})

}




  return (
    <div className='projects' id='projects'>
<div className='container text-center'>
<h2>
    Projects
    </h2>    
 <div className='option ' >
<MdSwipe className={toggle ? 'opt active':'opt'} color='white' onClick={()=>settoggle(true)}  size={35} style={{marginRight:'5px' , borderRight:'2px solid white',paddingRight:'5px'}} />
<BsGrid3X3GapFill className={toggle ? 'opt ':'opt active'} color='white' size={30} onClick={()=>settoggle(false)} />
    
 </div>
 <div className='mt-5  projects-container' >


    <motion.div className= "images glide mt-5 first-opt" 
    animate={toggle? {x:0 } : {x:'-100vw',display:'none'}}
    
    >
    <div className="glide__track" data-glide-el="track">
    <ul className="glide__slides">
 {data.map((project,i) => (
    <li className="glide__slide" key={i}>
            <a href={project.link} target='blank'> 
<img src={project.image} alt={project.title}/>
<div className='title'>{project.title} <BiLinkExternal color="white" size={30}/></div>
</a>
          </li>
  

 ))}
</ul>
  </div>
  <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--left" data-glide-dir="<"><AiOutlineLeft color='black'/></button>
        <button className="glide__arrow glide__arrow--right" data-glide-dir=">" ><AiOutlineRight color='black'/></button>
      </div>
  </motion.div>  
<motion.div className=' second-opt '

animate={toggle? {x:'100vw' , display:'none'}:{x:0}  }
>
    <div className='d-grid grid-system'>
{data && data.slice(indexOfFirstElement,indexOfLastElement).map((project,i) => (
    <div className='grid-child'>
            <a href={project.link} target='blank'> 
<img src={project.image} alt={project.title}/>
<div className='title-grid'>{project.title} </div>
</a>
   </div>      
  

 ))}


</div>
<div className='d-flex paginate align-items-center justify-content-center mt-3 '>
<Pagination 
color="primary"
defaultPage={1} 
count={Math.ceil(data.length/shownCards)} 
page={currentPage}
onChange={handlePagination}


/>
</div>

</motion.div>

 

  
</div>
</div>



    </div>
  )
}

export default Projects