import React ,{useEffect}from 'react'
import './home.css'
import {motion} from "framer-motion"
import Typewriter from 'typewriter-effect';
const Home = () => {


const typewritter ={
hidden:{
opacity:0

},
visible:{
  opacity:1,
 transition: {delay:4.245 , duration:0.5 }
}

}


  return (
    <div className='home-full-width'  >
    <div className='home container d-flex align-items-start justify-content-center pt-5 pb-4 flex-wrap flex-column'>







<svg id='khalid'  viewBox="0 0 734 158" fill="none" xmlns="http://www.w3.org/2000/svg"   



>
<path d="M91.3722 135.641C90.1473 135.641 88.9899 135.08 88.2314 134.118L51.9864 88.1579C49.4164 84.899 44.1964 87.2274 44.9042 91.3169L52.1498 133.185C52.5858 135.705 50.578 137.981 48.0235 137.863L4.04592 135.828C1.81931 135.725 0.106453 133.822 0.237722 131.597L7.75973 4.09308C7.89099 1.86807 9.81555 0.17956 12.0387 0.338891L38.4986 2.23522C40.5914 2.38521 42.2127 4.1268 42.2127 6.22499V47.9895C42.2127 51.7866 47.0076 53.4471 49.356 50.4633L87.8312 1.57552C88.5896 0.611849 89.7482 0.0493204 90.9745 0.0493204H121.548C124.788 0.0493204 126.684 3.69918 124.821 6.34958L86.5396 60.8098C85.6079 62.1352 85.5677 63.8917 86.4378 65.2583L127.336 129.493C129.031 132.156 127.118 135.641 123.961 135.641H91.3722Z" />
<path d="M279.536 16.7946C281.918 16.7946 283.773 18.8637 283.512 21.2315L268.896 154.232C268.673 156.259 266.96 157.795 264.92 157.795H238.29C236.081 157.795 234.29 156.004 234.29 153.795V105.974C234.29 103.765 232.499 101.974 230.29 101.974H185.068C182.858 101.974 181.068 103.765 181.068 105.974V153.795C181.068 156.004 179.277 157.795 177.068 157.795H150.853C148.644 157.795 146.853 156.004 146.853 153.795V20.7946C146.853 18.5854 148.644 16.7946 150.853 16.7946H185.018C187.227 16.7946 189.018 18.5854 189.018 20.7946V67.3023C189.018 69.7115 191.132 71.574 193.522 71.2704L223.538 67.4578C225.536 67.204 227.034 65.504 227.034 63.4897V20.7946C227.034 18.5854 228.825 16.7946 231.034 16.7946H279.536Z" />
<path d="M388.483 116.818C387.92 115.215 386.407 114.142 384.708 114.142H337.957C336.259 114.142 334.745 115.215 334.183 116.818L327.657 135.418C327.095 137.02 325.581 138.093 323.883 138.093H296.097C293.473 138.093 291.559 135.609 292.23 133.072L325.932 5.47987C326.395 3.72437 327.983 2.5014 329.799 2.5014H392.876C394.687 2.5014 396.273 3.71896 396.74 5.46922L430.819 133.061C431.497 135.601 429.583 138.093 426.954 138.093H398.783C397.084 138.093 395.571 137.02 395.009 135.418L388.483 116.818ZM373.242 88.6466C375.957 88.6466 377.883 85.9987 377.047 83.4151L364.115 43.4503C362.892 39.6695 357.501 39.7927 356.452 43.6255L345.51 83.5903C344.813 86.1358 346.729 88.6466 349.368 88.6466H373.242Z" />
<path d="M481.151 127.146C480.378 129.713 482.3 132.299 484.981 132.299H520.418C522.628 132.299 524.418 134.09 524.418 136.299V153.795C524.418 156.004 522.628 157.795 520.418 157.795H449.385C447.176 157.795 445.385 156.004 445.385 153.795V34.5399C445.385 32.3949 447.077 30.6317 449.221 30.5433L505.385 28.2286C508.133 28.1154 510.173 30.7449 509.38 33.3783L481.151 127.146Z" />
<path d="M576.818 0.0493088C579.097 0.0493088 580.915 1.95071 580.814 4.22754L575.123 131.819C575.027 133.957 573.266 135.641 571.127 135.641H544.434C542.347 135.641 540.611 134.037 540.446 131.957L530.342 4.3651C530.158 2.03876 531.996 0.0493088 534.329 0.0493088H576.818Z" />
<path d="M652.369 19.4986C667.175 19.4986 680.114 22.3315 691.185 27.9972C702.257 33.663 710.794 41.6466 716.796 51.9479C722.932 62.1205 734 73.9027 734 87.2945C734 100.558 722.932 112.34 716.796 122.641C710.794 132.942 702.19 140.926 690.985 146.592C679.914 152.258 667.042 155.09 652.369 155.09L600.192 157.593C597.91 157.703 596 155.882 596 153.598V16.5674C596 14.1487 598.13 12.2833 600.527 12.6023L652.369 19.4986ZM650.168 126.504C663.107 126.504 673.178 123.092 680.381 116.267C687.584 109.442 691.185 99.7849 691.185 87.2945C691.185 74.8041 687.584 65.0822 680.381 58.1288C673.178 51.1753 663.107 47.6986 650.168 47.6986H637.961C635.752 47.6986 633.961 49.4895 633.961 51.6986V122.504C633.961 124.713 635.752 126.504 637.961 126.504H650.168Z" />
</svg>





















<motion.div  
variants={typewritter}
initial='hidden'
animate="visible"
className='mt-5 last-tag'


>
<Typewriter 
options={{
    delay:'natural',
    autoStart: true,
    loop: true,
  }}
  onInit={(typewriter) => {
    typewriter
    .pauseFor(4500).typeString('Front-End Developer')
      .pauseFor(2000)
      .deleteAll()
      
      .start();
  }}
  
/>
</motion.div>
{/* <p className='first-tag' >
    &lt; Developer <span>class="front-end"</span> &gt; 
</p>
<p className='ps-5 ms-5'> Khalid  </p>
<p className='last-tag ' >
    &lt; Developer &gt; 
</p> */}


</div>
    </div>
  )
}

export default Home