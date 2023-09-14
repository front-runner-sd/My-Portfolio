import React from 'react'
import image2 from './signature2.png';
import pic from './2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faGoogle, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
function landing() {
  return (
    <>
    <nav className='fixed pt-8  top-0 z-10 bg-white w-full flex justify-center'>
      <div className='flex justify-between self-start w-11/12 max-w-6xl'>
      <div>
        <img src={image2}  alt='Soudip Das' className='w-[9.5rem] h-16 relative bottom-1'/>
    </div>
    <div className='relative right-16'>
       <ul className='flex gap-6 font-bold'>
          <li className='hover:text-blue-600 transition-colors hover:border-b-blue-700 hover:border-b-4 pb-1'><a href='#Home' className='transition-all'>Home</a></li>
          <li className='hover:text-blue-600 transition-colors hover:border-b-blue-700 hover:border-b-4  pb-1'><a href='#About'>About</a></li>
          <li className='hover:text-blue-600 transition-colors hover:border-b-blue-700 hover:border-b-4  pb-1'><a href='#Projects'>Projects</a></li>
          <li className='hover:text-blue-600 transition-colors hover:border-b-blue-700 hover:border-b-4  pb-1'><a href='#Home'>Contact</a></li>
          <li className=' text-blue-600 hover:text-blue-800 transition-colors hover:border-b-blue-700 hover:border-b-4  pb-1'><a href='#Home'>Download CV</a></li>
       </ul>
    </div>
      </div>

  </nav>
    <section id="Home" className='w-11/12 max-w-6xl'>
        <div className='flex flex-wrap h-screen justify-center items-center'>
            <div className='basis-2/4 justify-start flex flex-col  relative'>
              {/* <h1>नमस्कार 🙏</h1> */}
              <h1 className='text-[1.2rem] font-semibold tracking-widest pb-[0.5rem] ml-[0.2rem] text-blue-700'>Hello, I'm</h1>
              <h1 className='text-5xl pb-3 '>Soudip Das</h1>
              <p className='text-[1.1rem] text-gray-500'>A web developer based in Kolkata, India. I love building beautiful interfaces, web apps, and everything in between! I’m very passionate and dedicated to my work.</p>
            <ul className='pt-7 flex gap-6'>
              <li><a href='https://www.facebook.com/soudip.das.986' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className='text-2xl text-slate-600 hover:text-blue-700'/></a></li>
              <li><a href='https://www.linkedin.com/in/thesoudipdas' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className='text-2xl text-slate-600 hover:text-blue-800'/></a></li>
              <li><a href='https://github.com/front-runner-sd' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGithub} className='text-2xl text-slate-600 hover:text-slate-800'/></a></li>
              <li><a href='https://twitter.com/SoudipDas18' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className='text-2xl text-slate-600 hover:text-blue-500'/></a></li>
              <li><a href='mailto:iamsoudipdas@gmail.com' target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faGoogle} className='text-2xl text-slate-600 hover:text-yellow-500'/></a></li>
            </ul>
            </div>
            <div className='basis-2/4 flex justify-center'><img src={pic} alt='Soudip Das' className='w-80 relative '/></div>
        </div>
    </section>
    </>
  )
}

export default landing