
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex md:flex-row md:justify-around p-4'>
        <section>
          <span className='text-2xl font-thin'>Nextjs </span>
        </section>
        <section className='flex md:flex-row md:justify-between gap-6'>
           <Link href="/documentation">Documentation</Link> 
           <Link href="/cours"> cours </Link>
            <span>connexion</span>
        </section>
        <section><span>Logo</span></section>
    </div>
  )
}

export default Header
