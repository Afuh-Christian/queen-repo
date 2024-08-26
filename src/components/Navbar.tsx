"use client"
import React, { useState } from 'react'

const btn1s = [
    {name:"home", onclick:()=>{}},
    {name:"shop", onclick:()=>{}},
    // {name:"", onclick:()=>{}},
]
const btn2s = [
    {name:"about", onclick:()=>{}},
    {name:"contact us", onclick:()=>{}},
    // {name:"", onclick:()=>{}},
]



function Navbar() {
    const [isOpen, setIsOpen] = useState<Boolean>(false);
  return (
<>

<section className='fixed text-white hidden w-full md:flex items-center py-5 px-8 text-lg tracking-wider justify-between bg-transparent'>
        <div className='flex gap-8 '>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
  {/* <!-- Pencil --> */}
  <polygon points="10,90 30,10 40,10 20,90" fill="#FFA500"/>
  <polygon points="30,10 40,10 38,2 32,2" fill="#FFD700"/>
  <rect x="32" y="0" width="6" height="2" fill="#A0522D"/>
  
  {/* <!-- Scissors --> */}
  <circle cx="70" cy="50" r="8" fill="none" stroke="#4682B4" stroke-width="3"/>
  <circle cx="90" cy="70" r="8" fill="none" stroke="#4682B4" stroke-width="3"/>
  <path d="M70,50 L150,15 M90,70 L150,85" stroke="#4682B4" stroke-width="3" fill="none"/>
  
  {/* <!-- Text --> */}
  <text x="100" y="60" font-family="Arial, sans-serif" font-size="24" fill="#333333" text-anchor="middle">DesignCraft</text>
</svg>
            </div>
            <div className='flex gap-5 items-center'>
                {
                    btn1s.map(e => <button>{e.name.toUpperCase()}</button>)
                }
            </div>
        </div>

        <div className='flex gap-8'> 
        <div className='flex gap-5'>
        {
                    btn2s.map(e => <button>{e.name.toUpperCase()}</button>)
                }
        </div>

        <div  className='flex gap-5'>
            <div>$0.00</div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

  <circle cx="9" cy="21" r="1"/>
  <circle cx="20" cy="21" r="1"/>
  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  
  {/* <!-- Badge --> */}
  <circle cx="19" cy="5" r="6" fill="red" stroke="none"/>
  <text x="19" y="7" font-family="Arial, sans-serif" font-size="8" fill="white" text-anchor="middle" dy=".3em">3</text>
</svg>
            </div>
            <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="7" r="4"/>
  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
</svg></div>
        </div>
        </div>
        
    </section>





    <section className='text-white fixed w-full py-5 px-6 flex justify-between md:hidden'>
    <div>Logo</div>
    <div className='flex gap-5'>
    <div  className='flex gap-5'>
            <div>$0.00</div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">

  <circle cx="9" cy="21" r="1"/>
  <circle cx="20" cy="21" r="1"/>
  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
  
  {/* <!-- Badge --> */}
  <circle cx="19" cy="5" r="6" fill="red" stroke="none"/>
  <text x="19" y="7" font-family="Arial, sans-serif" font-size="8" fill="white" text-anchor="middle" dy=".3em">3</text>
</svg>
            </div>          
        </div>

<div 
 onClick={() => setIsOpen(!isOpen)}
>
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <line x1="3" y1="12" x2="21" y2="12"></line>
  <line x1="3" y1="6" x2="21" y2="6"></line>
  <line x1="3" y1="18" x2="21" y2="18"></line>
</svg>
</div>



    </div>


    </section>

          {/* Drawer */}
          <div 
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Drawer Content</h2>
          <ul>
            <li className="mb-2">Menu Item 1</li>
            <li className="mb-2">Menu Item 2</li>
            <li className="mb-2">Menu Item 3</li>
          </ul>
        </div>
      </div>




</>
  )
}

export default Navbar