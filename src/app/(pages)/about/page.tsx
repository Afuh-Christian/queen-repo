
import Footer from "@/components/Footer";
import Image from "next/image";


const btns = [
  {name: "shop" , onclick: () => {}},
  {name: "find More" , onclick: () => {}}
]

export default function page() {
  return (
<>
<section
 style={{backgroundImage: `url(${"./home.avif"})`}} 
className="bg-cover
h-auto pt-20 pb-40 md:pt-64 px-10 md:px-0  flex text-center justify-center text-white text-xl">
  <div className="text-2xl md:text-7xl font-bold md:w-3/5 text-wrap leading-relaxed">About Us</div>

</section>

<section className="grid grid-cols-1 md:grid-cols-2 p-2 md:p-20">
    <div className="flex flex-col gap-4 p-10  py-0 md:pt-40 md:pb-20">
        <div className="h-1 w-16 bg-blue-500"></div>
        <div className="text-5xl font-bold ">Who are we</div>
        <div className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit.</div>
    </div>
    <div
       style={{backgroundImage: `url(${"./home.avif"})`}} 
       className="bg-cover w-full"
    >
        
    </div>
</section>


<section className="p-5 md:p-20">
<div className="flex flex-col items-center gap-4">
<div className="h-1 w-16 bg-blue-500"></div>
<div className ="text-2xl font-bold">A Few words about </div>
<div className="text-5xl font-bold" > Our Team </div>
<div className="w-full px-5 md:px-48 text-lg text-center">Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra.</div>

</div>

<div className= "grid grid-cols-1 md:grid-cols-3 gap-4 p-2 md:px-64 pt-10">
    <div className="py-16 px-5 flex bg-[#e7e5e5] flex-col items-center gap-3 rounded-md">
        <div className="h-20 w-20 bg-blue-300 rounded-full"></div>
        <div>Harvey Spector</div>
        <div>Ceo</div>
    </div>
    <div className="py-16 px-5 flex bg-[#e7e5e5] flex-col items-center gap-3 rounded-md">
        <div className="h-20 w-20 bg-blue-300 rounded-full"></div>
        <div>Harvey Spector</div>
        <div>Ceo</div>
    </div>
    <div className="py-16 px-5 flex bg-[#e7e5e5] flex-col items-center gap-3 rounded-md">
        <div className="h-20 w-20 bg-blue-300 rounded-full"></div>
        <div>Harvey Spector</div>
        <div>Ceo</div>
    </div>
    <div className="py-16 px-5 flex bg-[#e7e5e5] flex-col items-center gap-3 rounded-md">
        <div className="h-20 w-20 bg-blue-300 rounded-full"></div>
        <div>Harvey Spector</div>
        <div>Ceo</div>
    </div>
    <div className="py-16 px-5 flex bg-[#e7e5e5] flex-col items-center gap-3 rounded-md">
        <div className="h-20 w-20 bg-blue-300 rounded-full"></div>
        <div>Harvey Spector</div>
        <div>Ceo</div>
    </div>
    <div className="py-16 px-5 flex bg-[#e7e5e5] flex-col items-center gap-3 rounded-md">
        <div className="h-20 w-20 bg-blue-300 rounded-full"></div>
        <div>Harvey Spector</div>
        <div>Ceo</div>
    </div>
    
</div>
</section>



<section className="md:p-10">
    <div 
     style={{backgroundImage: `url(${"./home.avif"})`}}
    
    className="flex flex-col items-center w-full bg-cover">
   <div className="text-center flex flex-col items-center gap-10 bg-[#e7e5e5] px-36  py-40 ">
   <div className="h-1 w-16 bg-blue-500"></div>
<div className="text-4xl font-bold" > Follow Us  </div>
<div className="flex gap-9">
            <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook" className="w-5 h-5"/></a>
            {/* <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png" alt="YouTube" className="w-5 h-5"/></a> */}
            <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" className="w-5 h-5"/></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" className="w-5 h-5"/></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="Google" className="w-5 h-5"/></a>
            {/* <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/yelp.png" alt="Yelp" className="w-5 h-5"/></a> */}
        </div>
    </div>
    </div>




</section>














 






<Footer/>
</>
  );
}
