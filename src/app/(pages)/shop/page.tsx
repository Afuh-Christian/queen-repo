import Footer from '@/components/Footer'
import React from 'react'

function page() {
  return (
    <>
    <section className='bg-[rgb(245,247,249)] grid grid-cols-12 text-black pt-40'>
     <div className='col-span-3'>
        <div className="flex px-10 py-5">
            <input className=' rounded-s-md p-3 w-4/5' placeholder='Search item'/>
            <button className="p-3 bg-blue-400 hover:bg-blue-200 text-white rounded-e-md ">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="11" cy="11" r="8"></circle>
  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
</svg>
            </button>
        </div>



        {/* <div className="px-10 pb-5 flex flex-col gap-5">
            <h1 className="text-4xl font-semibold">Categories</h1>
            <ol className="flex flex-col ps-10 gap-3">
                <li className="text-lg font-semibold">{">"} Bags </li>
                <li  className="text-lg font-semibold">{">"} Caps </li>
            </ol>
        </div> */}


<div className=" px-10 pb-5 rounded-lg">
  <div className="mb-6">
    <h2 className="text-3xl font-semibold mb-4">Filter by Price</h2>
    <input type="range" min="20" max="180" value="100" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mb-4"/>
    <div className="flex justify-between items-center">
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        FILTER
      </button>
      <span className="text-lg">Price: $20 — $180</span>
    </div>
  </div>

  <div>
    <h2 className="text-3xl font-semibold mb-4">Categories</h2>
    <ul className="space-y-2">
      <li className="flex justify-between items-center">
        <span className="text-xl">Accessories</span>
        <span className="text-gray-500">(7)</span>
      </li>
      <li className="flex justify-between items-center">
        <span className="text-xl">Men</span>
        <span className="text-gray-500">(14)</span>
      </li>
      <li className="flex justify-between items-center">
        <span className="text-xl">Women</span>
        <span className="text-gray-500">(17)</span>
      </li>
    </ul>
  </div>
</div>







        <div className="container mx-auto px-10 pb-5">
  <h2 className="text-3xl font-bold mb-6">Our Best Sellers</h2>
  
  <div className="space-y-4">
    {/* <!-- DNK Blue Shoes --> */}
    <div className="flex items-center border-b pb-4">
      <img src="path_to_blue_shoes_image.jpg" alt="DNK Blue Shoes" className="w-24 h-24 object-cover mr-4"/>
      <div>
        <h3 className="text-xl font-semibold">DNK Blue Shoes</h3>
        <div className="flex text-yellow-400 my-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
        </div>
        <p className="text-lg font-bold">$200.00 - $240.00</p>
      </div>
    </div>

    {/* <!-- Repeat the structure for other products --> */}
    {/* <!-- Red Hoodie --> */}
    <div className="flex items-center border-b pb-4">
      <img src="path_to_red_hoodie_image.jpg" alt="Red Hoodie" className="w-24 h-24 object-cover mr-4"/>
      <div>
        <h3 className="text-xl font-semibold">Red Hoodie</h3>
        <div className="flex text-yellow-400 my-1">
          {/* <!-- Repeat star SVGs --> */}
        </div>
        <p className="text-lg font-bold">$150.00</p>
      </div>
    </div>

    {/* <!-- Blue Denim Shorts --> */}
    <div className="flex items-center border-b pb-4">
      <img src="path_to_blue_denim_shorts_image.jpg" alt="Blue Denim Shorts" className="w-24 h-24 object-cover mr-4"/>
      <div>
        <h3 className="text-xl font-semibold">Blue Denim Shorts</h3>
        <div className="flex text-yellow-400 my-1">
          {/* <!-- Repeat star SVGs --> */}
        </div>
        <p className="text-lg font-bold">
          <span className="line-through text-gray-500 mr-2">$150.00</span>
          $130.00
        </p>
      </div>
    </div>

    {/* <!-- Repeat for DNK Red Shoes and DNK Green Tshirt --> */}

  </div>
</div>




    </div>

    <div className='col-span-9 p-10'>
    <div className="container mx-auto px-4">
  {/* <!-- Breadcrumb --> */}
  <nav className="text-gray-500 my-4">
    <ol className="list-none p-0 inline-flex">
      <li className="flex items-center">
        <a href="#">Home</a>
        <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
      </li>
      <li className="flex items-center">
        <a href="#">Store</a>
        <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
      </li>
      <li>
        <span className="text-gray-800">Page 3</span>
      </li>
    </ol>
  </nav>

  {/* <!-- Results and Sorting --> */}
  <div className="flex justify-between items-center mb-6">
    <p className="text-gray-600">Showing 25-31 of 31 results</p>
    <select className="border rounded px-4 py-2">
      <option>Default sorting</option>
    </select>
  </div>

  {/* <!-- Product Grid --> */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* <!-- Green Hoodie --> */}
    <div className="border rounded-lg overflow-hidden">
      <img src="path_to_green_hoodie.jpg" alt="Green Hoodie" className="w-full h-64 object-cover"/>
      <div className="p-4">
        <h3 className="font-bold text-lg">Green Hoodie</h3>
        <p className="text-gray-600">Men</p>
        <p className="font-bold mt-2">$150.00</p>
        <div className="flex text-gray-400 mt-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
        </div>
      </div>
    </div>

    {/* <!-- Lemons Tshirt --> */}
    <div className="border rounded-lg overflow-hidden">
      <img src="path_to_lemons_tshirt.jpg" alt="Lemons Tshirt" className="w-full h-64 object-cover"/>
      <div className="p-4">
        <h3 className="font-bold text-lg">Lemons Tshirt</h3>
        <p className="text-gray-600">Women</p>
        <p className="font-bold mt-2">$25.00 - $28.00</p>
        <div className="flex mt-2">
          <span className="w-6 h-6 rounded-full bg-blue-500 mr-2"></span>
          <span className="w-6 h-6 rounded-full bg-green-500 mr-2"></span>
        </div>
        <div className="flex mt-2">
          <span className="border px-2 py-1 mr-2">M</span>
          <span className="border px-2 py-1">L</span>
        </div>
        <div className="flex text-gray-400 mt-1">
          {/* <!-- Repeat star SVGs --> */}
        </div>
      </div>
    </div>

    {/* <!-- Light Brown Purse --> */}
    <div className="border rounded-lg overflow-hidden">
      <img src="path_to_light_brown_purse.jpg" alt="Light Brown Purse" className="w-full h-64 object-cover"/>
      <div className="p-4">
        <h3 className="font-bold text-lg">Light Brown Purse</h3>
        <p className="text-gray-600">Accessories</p>
        <p className="font-bold mt-2">$150.00</p>
        <div className="flex text-gray-400 mt-1">
          {/* <!-- Repeat star SVGs --> */}
        </div>
      </div>
    </div>
  </div>
</div>
    </div>



    </section>
    <Footer/>
    </>
  )
}

export default page