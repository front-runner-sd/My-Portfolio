import React from 'react'
import image from './3.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGitAlt, faGithub, faHtml5, faJava, faNodeJs, faNpm, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight,faCode } from '@fortawesome/free-solid-svg-icons'
function about() {
  return (
    <section id='About' className='w-full bg-[#f3f3f3] flex flex-col justify-center items-center '>
      <div className='w-11/12 max-w-6xl max-xl:max-w-5xl   max-lg:max-w-3xl max-md:max-w-xl max-md:ml-8'>
        <div className='flex pt-32 pb-24 max-[450px]:pt-24'>
        <div className='basis-[40%] saturate-[1.25] max-lg:hidden'><img src={image}  alt='Soudip Das' className='w-[22rem] rounded-2xl shadow-xl shadow-slate-600 bg-white  h-[35.8rem] p-1 mt-1 max-xl:w-[20rem] max-xl:h-[32.8rem]'/></div>
        <div className='basis-[59%] mr-16 max-lg:basis-full max-lg:mr-16 max-md:mr-0 max-[450px]:mr-6'>
          <h1 className='font-semibold text-xl text-[#006de9] mb-5 tracking-wide'>MY BACKGROUND</h1>
          <p className='font text-[0.95rem] text-slate-700 break-words mb-3 break-all max-[450px]:text-sm '>I am pursuing <b className='text-slate-900'>Bachelor of Technology in Information Technology</b> from Meghnad Saha Institute of Technology .</p>
          <p className='font  text-[0.95rem] text-slate-700 break-words mb-3 break-all'> As a web developer, I enjoy bridging the gap between Design and Implementation combining my technical knowledge with my keen eye for design. My goal is to build applications that are <b className='text-slate-900'>user friendly, visually appealing, </b> and efficient under the hood. </p>
          <p className='font  text-[0.95rem] text-slate-700 break-words break-all max-xl:hidden   max-lg:block'>  When I'm not in front of a computer screen, I'm probably reading books, Listening Podcasts or playing video games.<br/><br/></p>
          <a href='https://drive.google.com/file/d/1DpzjRhbBaAzNS7v15E5hfQ1_vEd6JRdQ/view?usp=drive_link' rel='noreferrer' target='_blank' className='text-[0.95rem] font-semibold text-slate-900 group hover:text-[#006de9]'>View my resume  <FontAwesomeIcon className='text-[1.1rem] ml-2 text-slate-900 group-hover:text-[#006de9] -rotate-45' icon={faArrowRight}/></a>
          <h1 className='font-semibold text-xl text-[#006de9] mb-7 mt-10 tracking-wider '>MY SKILLS</h1>
          <ul className='flex gap-x-[5.6rem] gap-y-8 flex-wrap max-xl:gap-y-6 max-xl:gap-x-[4.5rem] max-lg:gap-y-8 max-lg:gap-x-[6.7rem] max-md:gap-x-[4.5rem] max-[450px]:gap-x-14 max-[450px]:ml-4'>
            <li>
              <div className='w-12 group'>
              <FontAwesomeIcon icon={faHtml5} className='text-6xl text-[#787878] group-hover:text-[#006de9]'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-[#006de9]'>HTML</h1>
             </div>
            </li>
            <li>
              <div className='w-12 group'>
              <FontAwesomeIcon icon={faCss3Alt} className='text-6xl text-[#787878] group-hover:text-[#006de9]'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-[#006de9]'>CSS</h1>
             </div>
            </li>
            <li>
              <div className='w-12  group'>
              <FontAwesomeIcon icon={faSquareJs} className='text-6xl text-[#787878] group-hover:text-[#006de9]'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-[#006de9]'>JS</h1>
             </div>
            </li>
            <li>
              <div className='w-12 group'>
              <FontAwesomeIcon icon={faNodeJs} className='text-6xl text-[#787878] group-hover:text-[#006de9]'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-[#006de9]'>Node</h1>
             </div>
            </li>
            <li className='max-[450px]:hidden'>
              <div className='w-16  group '>
              <FontAwesomeIcon icon={faNpm} className='text-6xl text-[#787878] group-hover:text-[#006de9]'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-[#006de9]'>NPM</h1>
             </div>
            </li>
            <li>
              <div className='w-12  group'>
              <FontAwesomeIcon icon={faGitAlt} className='text-6xl text-[#787878] group-hover:text-[#006de9]'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-[#006de9]'>Git</h1>
             </div>
            </li>
            <li>
              <div className='w-12  group'>
              <FontAwesomeIcon icon={faGithub} className='text-[3.5rem] mt-1 text-[#787878] group-hover:text-[#006de9]'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-[#006de9]'>GitHub</h1>
             </div>
            </li>
            <li>
              <div className='w-12 group '>
              <FontAwesomeIcon icon={faCode} className='text-[2.95rem] mt-2 text-[#787878] group-hover:text-[#006de9]'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-[#006de9]'>C++</h1>
             </div>
            </li>
            <li>
              <div className='w-12 group '>
              <FontAwesomeIcon icon={faJava} className='text-6xl text-[#787878] group-hover:text-[#006de9]'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-[#006de9]'>Java</h1>
             </div>
            </li>
            <li>
              <div className='w-16 group '>
              <FontAwesomeIcon icon={faReact} className='text-6xl text-[#787878] group-hover:text-[#006de9]'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-[#006de9]'>React</h1>
             </div>
            </li>
          </ul>
        </div>

        </div>
        </div>
    </section>
  )
}

export default about