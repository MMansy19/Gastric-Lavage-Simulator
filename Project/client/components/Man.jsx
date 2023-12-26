import React from 'react'
import Image from 'next/image'
import man from '../images/man.png'
function Man() {
  return (
    <div className='mr-[40px] relative left-[-100px]'>
    <Image src={man} width={700} height={1000}/>
    </div>
  )
}

export default Man