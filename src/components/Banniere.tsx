import Image from 'next/image'
import imgs from '../Images/maxresdefault.jpg'
import React from 'react'
const Banniere = () => {
  return (
    <div className='w-full'>
      <Image className='w-full h-96'
      src={imgs}
      alt=''
      width={500}
      height={300}/>
    </div>
  )
}

export default Banniere
