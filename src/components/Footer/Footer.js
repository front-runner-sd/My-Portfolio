import React from 'react'

function Footer() {
  return (
    <footer className='w-full flex flex-col justify-center items-center bg-slate-900 '>
        <div className='h-32 w-11/12 max-w-6xl flex justify-between items-center max-xl:max-w-5xl max-lg:max-w-3xl max-[450px]:flex-col max-[450px]:justify-center max-[450px]:gap-4'>
             <div className=''><h1 className='text-left text-slate-200 text-xl ml-4 max-[450px]:text-base max-[450px]:ml-0'>Copyright © 2023</h1></div>
             <div className=''><h1 className='text-left text-slate-300  mr-12 text-[1.15rem] tracking-wider max-[450px]:text-sm max-[450px]:mr-1' >Designed & Developed by <b className='text-slate-50 font-normal text-[1.3rem] max-[450px]:text-base'>Soudip Das</b></h1></div>
        </div>
    </footer>
  )
}

export default Footer