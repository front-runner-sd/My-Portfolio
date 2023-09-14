import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
function ProjectCard(props) {
  return (
    <div className={`flex ${props.rev?'flex-row-reverse':'flex-row'} gap-8 h-[29rem] mr-10 shadow-[0px_0px_13px_rgba(0,0,0,0.24)] rounded-xl p-5 bg-white max-lg:flex-col max-lg:h-[50rem] max-[450px]:p-4 max-[450px]:mr-4 max-[450px]:h-[48rem]` }>
        <div className='rounded-xl h-auto overflow-hidden basis-[60%] shadow-[0px_0px_10px_rgba(0,0,0,0.15)] border-[2px] border-[rgb(215,215,215)] max-[450px]:'><a href={props.link} target='_blank' rel="noreferrer"><img src={props.img} alt='Project' className={`transition-[transform] duration-[4s] ease-in-out hover:translate-y-[${props.y}%]`} /></a></div>
        <div className='basis-[40%] flex flex-col justify-center max-lg:pb-8 max-lg:px-6 max-[450px]:px-4'>
              <div> <h1 className={`font-semibold text-center text-3xl  ${!props.rev?'pr-4':'pl-4'} max-lg:pr-0 max-lg:pl-0`}>{props.name}</h1></div>
              <div> <p className={`break-all mt-6 text-slate-500 text-center ${!props.rev?'pr-4':'pl-4'} max-lg:pr-0 max-lg:pl-0 max-[450px]:text-sm `}>{props.desc}</p></div>
              <div> <h1 className={` ${!props.rev?'pr-4':'pl-4'} text-center mt-5 font-bold text-blue-800 max-lg:pr-0 max-lg:pl-0`}>Technology Used</h1></div>
              <ul className={`flex flex-row mt-4 justify-center gap-2  ${!props.rev?'pr-4':'pl-4'} max-lg:pr-0 max-lg:pl-0 max-[450px]:flex-wrap`}>
                  {props.list.map((ele)=>{
                      return<li className={`p-[0.35rem] text-blue-700 font-semibold border-[2px] border-[#1d4ed8] rounded-md text-sm  hover:text-white hover:bg-blue-800 hover:font-normal hover:cursor-pointer `}> {ele}</li>
                  })}
              </ul>
              <div className={`mt-12 flex justify-evenly  ${!props.rev?'pr-4':'pl-4'} max-lg:pr-0 max-lg:pl-0 max-[450px]:mt-8 max-[450px]:gap-5`} >
                    <a href={props.git} rel='noreferrer' target='_blank' className='flex flex-row p-2 bg-slate-900 rounded-lg gap-4 group hover:bg-white border-[2px] cursor-pointer hover:border-slate-600 hover:font-bold shadow-[0px_0px_10px_rgba(0,0,0,0.4)] border-slate-100 '> 
                        <FontAwesomeIcon icon={faGithub} className='text-slate-50 text-2xl group-hover:text-slate-800'/>
                        <h1 className='text-slate-50 text-[0.9rem] group-hover:text-slate-800 '>Github <b className='font-light max-[450px]:hidden'>Repo</b></h1> 
                    </a>
                    <a href={props.link} rel='noreferrer' target='_blank' className='flex flex-row p-2 bg-slate-900 rounded-lg gap-4  group hover:bg-white border-[2px] cursor-pointer hover:border-slate-600 hover:font-bold shadow-[0px_0px_10px_rgba(0,0,0,0.4)] border-slate-100'> 
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-slate-50 text-[1.3rem]      group-hover:text-slate-800'/>
                        <h1 className='text-slate-50 text-[0.9rem] group-hover:text-slate-800 '>See <b className='font-light'>Live</b></h1> 
                    </a>
              </div>
        </div>
    </div>
  )
}

export default ProjectCard ;