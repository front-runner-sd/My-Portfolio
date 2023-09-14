import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Contact() {
  return (
    <section id='Contact' className='w-full flex flex-col h-[33rem] items-center max-md:h-[50rem] max-[450px]:h-[38rem]'>
         <div className='w-11/12 max-w-6xl mt-20 ml-4 max-xl:max-w-5xl max-lg:max-w-3xl max-md:max-w-xl '>
             <h1 className='text-blue-800 font-semibold text-xl tracking-wide max-[450px]:ml-4'>Contact</h1>
             <h1 className='text-slate-900 font-semibold text-[1.35rem] tracking-wide mt-5 max-[450px]:hidden'>Don't be shy! Fell free to contact me anytime!</h1>
            
            <div className='flex flex-row mt-14 gap-24 max-md:flex-col max-md:gap-8 max-[450px]:mt-10 max-[450px]:ml-6 max-[450px]:gap-4'>

             <div className='flex flex-row  h-20 gap-4 '> 
                 <div className='flex justify-center items-center'>
                 <div className='shadow-[0px_0px_13px_rgba(0,0,0,0.24)] p-[0.8rem] group hover:bg-blue-700 rounded-full'><FontAwesomeIcon icon={faMapLocationDot} className='text-blue-700 text-[1.6rem] group-hover:text-slate-50'/></div>
                </div>
                 <div className='flex flex-col justify-center'> 
                    <h1 className='text-xl font-semibold mb-1 tracking-wide max-[450px]:text-lg'>Location</h1>
                    <h1 className='text-gray-500 tracking-wider max-[450px]:text-sm'>Kolkata, India</h1>
                 </div>
             </div>

             <div className='flex flex-row  h-20 gap-4 '> 
                 <div className='flex justify-center items-center'>
                 <a href='mailto:iamsoudipdas@gmail.com'><div className='shadow-[0px_0px_13px_rgba(0,0,0,0.24)] p-[0.7rem] rounded-full hover:bg-blue-700 group '><FontAwesomeIcon icon={ faEnvelope} className='text-blue-700 text-[1.75rem] group-hover:text-slate-100' /></div></a>
                </div>
                 <div className='flex flex-col justify-center'> 
                    <h1 className='text-xl font-semibold mb-1 tracking-wide max-[450px]:text-lg'>Mail id</h1>
                    <h1 className='text-gray-500 tracking-wider max-[450px]:text-sm'> <a href='mailto:iamsoudipdas@gmail.com'>iamsoudipdas@gmail.com </a></h1>
                 </div>
             </div>

             
            </div>

            <div className='flex flex-row mt-5 gap-24 max-md:flex-col max-md:gap-8 max-[450px]:ml-6 max-[450px]:gap-4'>

            <div className='flex flex-row  h-20 gap-4'> 
                <div className='flex justify-center items-center'>
                <a href='https://soudip.me' target='_blank' rel='noreferrer'>
                <div className='shadow-[0px_0px_13px_rgba(0,0,0,0.24)] p-[0.8rem] group hover:bg-blue-700 rounded-full'><FontAwesomeIcon icon={faGlobe} className='text-blue-700 text-[1.6rem] group-hover:text-slate-50'/></div>
                </a>
            </div>
            <div className='flex flex-col justify-center'> 
                <h1 className='text-xl font-semibold mb-1 tracking-wide max-[450px]:text-lg'>Portfolio</h1>
                <a href='https://soudip.me' target='_blank' rel='noreferrer'>
                <h1 className='text-gray-500 tracking-wider max-[450px]:text-sm'>www.soudip.me</h1>
                </a>
            </div>
        </div>

        <div className='flex flex-row  h-20 gap-4 relative right-5 max-md:right-0'> 
            <div className='flex justify-center items-center'>
            <a href='https://www.linkedin.com/in/thesoudipdas/' target='_blank' rel='noreferrer'><div className='shadow-[0px_0px_13px_rgba(0,0,0,0.24)] p-[0.7rem] rounded-full hover:bg-blue-700 group px-[0.9rem]'><FontAwesomeIcon icon={ faLinkedin} className='text-blue-700 text-[1.75rem] group-hover:text-slate-100' /></div></a>
        </div>
        <div className='flex flex-col justify-center'> 
            <h1 className='text-xl font-semibold mb-1 tracking-wide max-[450px]:text-lg'>Linkedin</h1>
            <h1 className='text-gray-500 tracking-wider max-[450px]:text-sm'> <a href='https://www.linkedin.com/in/thesoudipdas/' target='_blank' rel='noreferrer'>linkedin.com/in/thesoudipdas</a></h1>
        </div>
        </div>

        <div className='flex flex-row  h-20 gap-4 relative right-[3.2rem] max-xl:hidden'> 
            <div className='flex justify-center items-center'>
            <a href='http://github.com/front-runner-sd' target='_blank' rel='noreferrer'><div className='shadow-[0px_0px_13px_rgba(0,0,0,0.24)] p-[0.6rem] rounded-full hover:bg-blue-700 group px-[0.7rem]'><FontAwesomeIcon icon={ faGithub} className='text-blue-700 text-[2rem] group-hover:text-slate-100' /></div></a>
        </div>
        <div className='flex flex-col justify-center'> 
            <h1 className='text-xl font-semibold mb-1 tracking-wide'>Github</h1>
            <h1 className='text-gray-500 tracking-wider'> <a href='https://github.com/front-runner-sd/' target='_blank' rel='noreferrer'>github.com/front-runner-sd</a></h1>
        </div>
        </div>
        
    </div>
         </div>
    </section>
  )
}

export default Contact