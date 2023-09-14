import React from 'react'

function Footer() {
  return (
    <footer className='w-full flex flex-col justify-center items-center  bg-slate-900'>
        <div className='h-32 w-11/12 max-w-6xl flex justify-between items-center'>
             <div className=''><h1 className='text-left text-slate-200 text-xl ml-4'>Copyright © 2023</h1></div>
             <div className=''><h1 className='text-left text-slate-300  mr-12 text-[1.15rem] tracking-wider'>Designed & Developed by <b className='text-slate-50 font-normal text-[1.3rem]'>Soudip Das</b></h1></div>
        </div>
    </footer>
  )
}

export default Footer