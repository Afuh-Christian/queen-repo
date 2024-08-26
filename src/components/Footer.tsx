


export default function Footer(){
  return (

    <>
    
    <div className="container mx-auto md:p-40">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* <!-- Worldwide Shipping --> */}
    <div className="flex flex-col items-center text-center">
      <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
      <h3 className="text-xl font-semibold mb-2">Worldwide Shipping</h3>
      <p className="text-gray-600">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </div>

    {/* <!-- Best Quality --> */}
    <div className="flex flex-col items-center text-center">
      <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <path d="M3 6h18"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
      <h3 className="text-xl font-semibold mb-2">Best Quality</h3>
      <p className="text-gray-600">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </div>

    {/* <!-- Best Offers --> */}
    <div className="flex flex-col items-center text-center">
      <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
        <line x1="7" y1="7" x2="7.01" y2="7"/>
      </svg>
      <h3 className="text-xl font-semibold mb-2">Best Offers</h3>
      <p className="text-gray-600">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </div>

    {/* <!-- Secure Payments --> */}
    <div className="flex flex-col items-center text-center">
      <svg className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
      <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
      <p className="text-gray-600">It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
    </div>
  </div>
</div>





    
    





  <div className="h-auto bg-white p-8 text-center md:text-start">
    {/* <!-- Sale Announcement --> */}
    <div className="text-center text-2xl font-bold mb-8 md:p-10">
        SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
    </div>

    {/* <!-- Footer Content --> */}
    <div className="flex flex-col md:flex-row justify-between items-center md:items-center border-t pt-8  md:p-10 ">
        {/* <!-- Logo and Slogan --> */}
        <div className="mb-8 md:mb-0  text-center md:text-start">
            <div className="text-4xl font-bold">DNK</div>
            <div className="text-lg">The best look anytime, anywhere.</div>
        </div>

        {/* <!-- For Her Section --> */}
        <div className="mb-8 md:mb-0   ">
            <div className="text-xl font-semibold">For Her</div>
            <ul className="mt-4 space-y-2 text-gray-600 ">
                <li>Women Jeans</li>
                <li>Tops and Shirts</li>
                <li>Women Jackets</li>
                <li>Heels and Flats</li>
                <li>Women Accessories</li>
            </ul>
        </div>

        {/* <!-- For Him Section --> */}
        <div className="mb-8 md:mb-0 ">
            <div className="text-xl font-semibold">For Him</div>
            <ul className="mt-4 space-y-2 text-gray-600">
                <li>Men Jeans</li>
                <li>Men Shirts</li>
                <li>Men Shoes</li>
                <li>Men Accessories</li>
                <li>Men Jackets</li>
            </ul>
        </div>

        {/* <!-- Subscribe Section --> */}
        <div className="">
            <div className="text-xl font-semibold">Subscribe</div>
            <div className="mt-4 flex flex-col gap-2">
                <input className="px-4 py-2 border rounded-md w-full md:w-auto" type="email" placeholder="Your email address..."/>
                <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md w-full md:w-auto">SUBSCRIBE</button>
            </div>
        </div>
    </div>

    {/* <!-- Footer Bottom --> */}
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center mt-8 pt-4 border-t  md:p-10">
        <div className="text-gray-600">
            Copyright © 2024 Brandstore. Powered by Brandstore.
        </div>
        <div className="flex space-x-4">
            <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook" className="w-5 h-5"/></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png" alt="YouTube" className="w-5 h-5"/></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter" className="w-5 h-5"/></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram" className="w-5 h-5"/></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="Google" className="w-5 h-5"/></a>
            <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/yelp.png" alt="Yelp" className="w-5 h-5"/></a>
        </div>
    </div>
</div>

</>
  );
}