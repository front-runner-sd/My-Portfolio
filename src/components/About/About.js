import React from 'react'
import image from './3.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3Alt, faGitAlt, faGithub, faHtml5, faJava, faNodeJs, faNpm, faReact, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight,faCode } from '@fortawesome/free-solid-svg-icons'
function about() {
  return (
    <section id='About' className='w-full bg-[#f0f0f0] flex flex-col justify-center items-center'>
      <div className='w-11/12 max-w-6xl'>
        <div className='flex pt-32 pb-24'>
        <div className='basis-[40%] saturate-[1.25]'><img src={image}  alt='Soudip Das' className='w-[22rem] rounded-2xl shadow-xl shadow-slate-600  h-[35.8rem] p-1 mt-1'/></div>
        <div className='basis-[59%] mr-16'>
          <h1 className='font-semibold text-xl text-blue-800 mb-5 tracking-wide'>MY BACKGROUND</h1>
          <p className='font text-[0.95rem] text-slate-700 break-words mb-3 break-all'>I am pursuing <b className='text-slate-900'>Bachelor of Technology in Information Technology</b> from Meghnad Saha Institute of Technology .</p>
          <p className='font  text-[0.95rem] text-slate-700 break-words mb-3 break-all'> As a web developer, I enjoy bridging the gap between Design and Implementation combining my technical knowledge with my keen eye for design. My goal is to build applications that are <b className='text-slate-900'>user friendly, visually appealing, </b> and efficient under the hood. </p>
          <p className='font  text-[0.95rem] text-slate-700 break-words break-all'>  When I'm not in front of a computer screen, I'm probably reading books, Listening Podcasts or playing video games.<br/><br/></p>
          <a href='' className='text-[0.95rem] font-semibold text-slate-900 group hover:text-blue-700'>View my resume  <FontAwesomeIcon className='text-[1.1rem] ml-2 text-slate-900 group-hover:text-blue-700 -rotate-45' icon={faArrowRight}/></a>
          <h1 className='font-semibold text-xl text-blue-800 mb-7 mt-10 tracking-wider'>MY SKILLS</h1>
          <ul className='flex gap-x-[5.6rem] gap-y-8 flex-wrap '>
            <li>
              <div className='w-12 group'>
              <FontAwesomeIcon icon={faHtml5} className='text-6xl text-[#787878] group-hover:text-blue-800'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-blue-700'>HTML</h1>
             </div>
            </li>
            <li>
              <div className='w-12 group'>
              <FontAwesomeIcon icon={faCss3Alt} className='text-6xl text-[#787878] group-hover:text-blue-800'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-blue-800'>CSS</h1>
             </div>
            </li>
            <li>
              <div className='w-12  group'>
              <FontAwesomeIcon icon={faSquareJs} className='text-6xl text-[#787878] group-hover:text-blue-800'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-blue-800'>JS</h1>
             </div>
            </li>
            <li>
              <div className='w-12 group'>
              <FontAwesomeIcon icon={faNodeJs} className='text-6xl text-[#787878] group-hover:text-blue-800'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-blue-800'>Node</h1>
             </div>
            </li>
            <li>
              <div className='w-16  group'>
              <FontAwesomeIcon icon={faNpm} className='text-6xl text-[#787878] group-hover:text-blue-800'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-blue-800'>NPM</h1>
             </div>
            </li>
            <li>
              <div className='w-12  group'>
              <FontAwesomeIcon icon={faGitAlt} className='text-6xl text-[#787878] group-hover:text-blue-800'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-blue-800'>Git</h1>
             </div>
            </li>
            <li>
              <div className='w-12  group'>
              <FontAwesomeIcon icon={faGithub} className='text-[3.5rem] mt-1 text-[#787878] group-hover:text-blue-800'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-blue-800'>GitHub</h1>
             </div>
            </li>
            <li>
              <div className='w-12 group '>
              <FontAwesomeIcon icon={faCode} className='text-[2.95rem] mt-2 text-[#787878] group-hover:text-blue-800'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-blue-800'>C++</h1>
             </div>
            </li>
            <li>
              <div className='w-12 group '>
              <FontAwesomeIcon icon={faJava} className='text-6xl text-[#787878] group-hover:text-blue-800'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-blue-800'>Java</h1>
             </div>
            </li>
            <li>
              <div className='w-16 group '>
              <FontAwesomeIcon icon={faReact} className='text-6xl text-[#787878] group-hover:text-blue-800'/>
              <h1 className='text-center font-semibold text-[#787878] group-hover:text-blue-800'>React</h1>
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