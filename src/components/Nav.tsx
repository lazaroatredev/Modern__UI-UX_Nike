import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'
import { useState } from 'react'

const Nav = () => {

  const [toogleHamburger, setToogleHamburger] = useState(false)
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
          <img src={headerLogo} alt="Logo"  width={130} height={29}/>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item)=>(
            <li key={item.label}>
              <a 
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:text-coral-red hover:font-semibold'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='lg:hidden relative'>
          <img 
            src={hamburger} 
            alt="Hamburger" 
            width={25} 
            height={25} 
            onClick={()=>setToogleHamburger(!toogleHamburger)}
          />
          {toogleHamburger &&           
          <ul 
            className='flex flex-col absolute bg-coral-red  px-8 py-4 -right-3 top-9 rounded z-50'
          >
          {navLinks.map((item)=>(
            <li key={item.label}>
              <a 
                href={item.href}
                className='font-montserrat leading-normal text-lg text-white hover:font-semibold'
              >
                {item.label}
              </a>
            </li>
          ))}
          </ul>}

        </div>
      </nav>
    </header>
  )
}

export default Nav