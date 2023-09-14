import React from 'react'
import ProjectCard from './ProjectCard';
import p1 from './NN1.png';
import p2 from './WM 1.png';
import p3 from './PF1.png'
import p4 from './DS-1.png';
function Projects() {
  return (
    <section id='Projects' className='w-full flex flex-col justify-center items-center bg-[#dfdfdf] border'>
      <div className='w-11/12 max-w-6xl'>
           <h1 className='text-left mt-36 font-bold text-xl text-blue-800 tracking-wide'>MY PORTFOLIO</h1>
           <h1 className='mt-4 font-bold text-2xl tracking-wider mb-16'>Each Project is a unique piece of Development 🧩</h1>
           <div className='flex flex-col gap-16 mb-12'>
                <ProjectCard img={p1} key={1}  name={"News Nova"} desc={"News Nova is a a Responsive User Friendly Live News Reading App. User can get News from 9 different News Sources. User can Sign up and Login with their email id to search news about any topic."} rev={false} y={-42} link={"https://news-nova.netlify.app"} list={['React','Css','React Router','Firebase','NewsApi']} git={'https://github.com/front-runner-sd/News-Nova-Public'} />
                
                <ProjectCard img={p2} key={2} name={"Weather Matrix"} desc={"Weather Matrix is a Responsive Weather details and analysis application. 10 types of  Weather Components present. Current weather Api and Geocoding api is used here."} y={-60} rev={true} link={"https://weather-matrix.netlify.app"} list={['React','Css','OpenWeather Api','Chart Js']} git={'https://github.com/front-runner-sd/Weather-Matrix'}/>
                
                <ProjectCard img={p3} key={1}  name={"Portfolio Site"} desc={"It is my Portfolio Site. It has responsive and  minimalistic layout. All my details and projects are listed here. My cv download link is also present here."} rev={false} y={-82} link={"https://soudip.me"} list={['React','Tailwind Css','Javascript']} git={'https://github.com/front-runner-sd/My-Portfolio'} />
                
                <ProjectCard img={p4} key={2} name={"Dog Search"} desc={"It is a fun little website that you can use to know  more about your precious Doggy Or you can use it to browse different types of dog species and their  Charecteristics, Weight, Average Life Span."} y={-20} rev={true} link={"https://doggy-search-by-soudip-das.netlify.app/"} list={['Html','Css','DogApi','JavaScript']} git={'https://github.com/front-runner-sd/Doggy-Know-More-About-Your-Precious-One'}/>
           </div>
      </div>
    </section>
  )
}

export default Projects