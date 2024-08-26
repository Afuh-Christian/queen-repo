import Footer from "@/components/Footer";
import Image from "next/image";


const btns = [
  {name: "shop" , onclick: () => {}},
  {name: "find More" , onclick: () => {}}
]

export default function Home() {
  return (
<>
<section
 style={{backgroundImage: `url(${"./home.avif"})`}} 
className="bg-cover
h-auto pt-20 pb-10 md:pt-0 px-10 md:px-0 md:h-screen flex flex-col text-center md:text-start justify-center gap-8 text-white text-xl md:ps-28">
  <div className="text-2xl md:text-7xl font-bold md:w-3/5 text-wrap leading-relaxed">Raining Offers For Hot Summer!</div>
  <div>Hot in summer</div>
  <div className="flex flex-col md:flex-row gap-5">
   {
    btns.map(e=> <button className="py-3 px-10 bg-transparent hover:bg-white hover:text-black border border-spacing-1">{e.name.toUpperCase()}</button>)
   }
    {/* <button>find more</button> */}
  </div>
</section>




<section className="flex text-white flex-wrap gap-5 justify-center p-1 md:p-20">

  <div 
   style={{backgroundImage: `url(${"./home.avif"})`}} 
  className="bg-cover flex flex-col gap-5 pt-80 w-full md:max-w-80 p-5 bg-blue-200" >
   <div className="tracking-relaxed text-2xl font-bold">20% Off On Tank Tops</div>
   <div className="text-lg">k adfasd fadajsdfk jadkjfaldj fasdjfasdj asdjf laksdfasd fad </div>
   <button className="py-3 px-10 bg-transparent hover:bg-white hover:text-black border border-spacing-1">Shop</button>
  </div>



</section>








<section>
<div className="bg-gray-100 p-5 md:p-20">
    <h2 className="text-3xl font-bold mb-4 text-center">Featured Products</h2>
    <div className="flex justify-center mb-4">
        <div className="h-1 w-16 bg-blue-500"></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* <!-- Product Card 1 --> */}
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-200">
            <div className="relative">
                <img src="path_to_yellow_shoes_image" alt="DNK Yellow Shoes" className="w-full h-40 object-cover rounded"/>
                <span className="absolute top-2 left-2 bg-white text-sm text-red-500 font-bold p-1 rounded">Sale!</span>
            </div>
            <h3 className="mt-4 text-lg font-semibold">DNK Yellow Shoes</h3>
            <p className="text-sm text-gray-500">Men</p>
            <div className="flex items-center">
                <span className="text-gray-500 line-through mr-2">$150.00</span>
                <span className="text-green-600 font-bold">$120.00</span>
            </div>
            <div className="flex mt-2">
                <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-1 text-gray-400">(0)</span>
                </div>
            </div>
        </div>

        {/* <!-- Product Card 2 --> */}
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-200">
            <div className="relative">
                <img src="path_to_blue_shoes_image" alt="DNK Blue Shoes" className="w-full h-40 object-cover rounded"/>
            </div>
            <h3 className="mt-4 text-lg font-semibold">DNK Blue Shoes</h3>
            <p className="text-sm text-gray-500">Men</p>
            <div className="text-lg font-bold">
                $200.00 - $240.00
            </div>
            <div className="flex mt-2">
                <span className="w-5 h-5 bg-blue-500 rounded-full mr-2"></span>
                <span className="w-5 h-5 bg-green-500 rounded-full mr-2"></span>
                <span className="w-5 h-5 bg-orange-500 rounded-full"></span>
            </div>
            <div className="flex mt-2">
                <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-1 text-gray-400">(0)</span>
                </div>
            </div>
        </div>

        {/* <!-- Product Card 3 --> */}
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-200">
            <div className="relative">
                <img src="path_to_dark_brown_jeans_image" alt="Dark Brown Jeans" className="w-full h-40 object-cover rounded"/>
            </div>
            <h3 className="mt-4 text-lg font-semibold">Dark Brown Jeans</h3>
            <p className="text-sm text-gray-500">Men</p>
            <div className="text-lg font-bold">$150.00</div>
            <div className="flex mt-2">
                <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-1 text-gray-400">(0)</span>
                </div>
            </div>
        </div>

        {/* <!-- Product Card 4 --> */}
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-200">
            <div className="relative">
                <img src="path_to_blue_denim_jeans_image" alt="Blue Denim Jeans" className="w-full h-40 object-cover rounded"/>
            </div>
            <h3 className="mt-4 text-lg font-semibold">Blue Denim Jeans</h3>
            <p className="text-sm text-gray-500">Women</p>
            <div className="text-lg font-bold">$150.00</div>
            <div className="flex mt-2">
                <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-1 text-gray-400">(0)</span>
                </div>
            </div>
        </div>

        {/* <!-- Product Card 5 --> */}
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-200">
            <div className="relative">
                <img src="path_to_basic_gray_jeans_image" alt="Basic Gray Jeans" className="w-full h-40 object-cover rounded"/>
            </div>
            <h3 className="mt-4 text-lg font-semibold">Basic Gray Jeans</h3>
            <p className="text-sm text-gray-500">Women</p>
            <div className="text-lg font-bold">$150.00</div>
            <div className="flex mt-2">
                <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-1 text-gray-400">(0)</span>
                </div>
            </div>
        </div>
        {/* <!-- Product Card 5 --> */}
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-200">
            <div className="relative">
                <img src="path_to_basic_gray_jeans_image" alt="Basic Gray Jeans" className="w-full h-40 object-cover rounded"/>
            </div>
            <h3 className="mt-4 text-lg font-semibold">Basic Gray Jeans</h3>
            <p className="text-sm text-gray-500">Women</p>
            <div className="text-lg font-bold">$150.00</div>
            <div className="flex mt-2">
                <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-1 text-gray-400">(0)</span>
                </div>
            </div>
        </div>
        {/* <!-- Product Card 5 --> */}
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-200">
            <div className="relative">
                <img src="path_to_basic_gray_jeans_image" alt="Basic Gray Jeans" className="w-full h-40 object-cover rounded"/>
            </div>
            <h3 className="mt-4 text-lg font-semibold">Basic Gray Jeans</h3>
            <p className="text-sm text-gray-500">Women</p>
            <div className="text-lg font-bold">$150.00</div>
            <div className="flex mt-2">
                <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-1 text-gray-400">(0)</span>
                </div>
            </div>
        </div>
        {/* <!-- Product Card 5 --> */}
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-200">
            <div className="relative">
                <img src="path_to_basic_gray_jeans_image" alt="Basic Gray Jeans" className="w-full h-40 object-cover rounded"/>
            </div>
            <h3 className="mt-4 text-lg font-semibold">Basic Gray Jeans</h3>
            <p className="text-sm text-gray-500">Women</p>
            <div className="text-lg font-bold">$150.00</div>
            <div className="flex mt-2">
                <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="ml-1 text-gray-400">(0)</span>
                </div>
            </div>
        </div>
    </div>
</div>

</section>






<Footer/>
</>
  );
}
