import React, { useState } from "react";

function Footer() {
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="mt-10">
      {/* 1st */}
      <div className="bg-[#37475a] hover:bg-[#485769] text-center h-10 w-full flex items-center justify-center text-white font-medium select-none">
        <button onClick={scrollToTop}>
        Back to top
        </button>
        
      </div>
      {/* 2nd */}
      <div className="bg-[#232f3e] text-white flex flex-col md:flex-row justify-center pl-5 md:pl-0 space-y-10 md:space-y-0 md:space-x-20 py-10 border-b border-gray-600 select-none About_decor">
        <div>
          <h4 className="font-medium">Get to Know Us</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Cares</p>
          <p>Gift a Smile</p>
        </div>
        <div>
          <h4 className="font-medium">Connect with Us</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div>
          <h4 className="font-medium">Make Money with Us</h4>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Amazon Global Selling</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>
        <div>
          <h4 className="font-medium">Let Us Help You</h4>
          <p>COVID-19 and Amazon</p>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Amazon Assistant Download</p>
          <p>Help</p>
        </div>
      </div>
      <div className="bg-[#232f3e]">
        <div className="flex justify-center space-x-10 py-5">
        <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
            className="pl-1 h-10 md:pl-4" alt="amazon"
          />
          <select name="" id="" className="px-2 py-1 hover:active bg-transparent border border-gray-400 rounded-md text-gray-500">
            <option value="">English-En</option>
            <option value="">हिन्दी-Hi</option>
            <option value="">मराठी-MR</option>
          </select>
        </div>
        <div>
          <ul className="text-white flex space-x-3 justify-center w-full pb-5 px-20 flex-wrap hover_decor cursor-pointer Country">
            <li>India</li>
            <li>Australia</li>
            <li>Brazil</li>
            <li>Canada</li>
            <li>China</li>
            <li>France</li>
            <li>Germany</li>
            <li>Italy</li>
            <li>Japan</li>
            <li>Mexico</li>
            <li>Netherlands</li>
            <li>Poland</li>
            <li>Singapore</li>
            <li>Spain</li>
            <li>Turkey</li>
            <li>United Arab Emirates</li>
            <li>United Kingdom</li>
            <li>United States</li>
          </ul>
        </div>
      </div>
      {/* 3rd */}
      <div className="bg-[#131a22]">
        <div className="flex flex-wrap pl-5 md:pl-0 md:justify-center gap-14 text-white w-full md:px-2 py-10 footer_p hover_decor">
          <div className="flex flex-col space-y-10">
            <div className="">
              <h4 className="font-medium text-sm">Abebooks</h4>
              <p>Books, art</p>
              <p>& collectibles</p>
            </div>
            <div>
              <h4 className="font-medium text-sm">Shopbop</h4>
              <p>Designer</p>
              <p>Fashion Brands</p>
            </div>
          </div>

          <div className="flex flex-col space-y-10">
            <div>
              <h4 className="font-medium text-sm">Amazon Web Services</h4>
              <p>Scalable Cloud</p>
              <p>Computing Services </p>
            </div>
            <div>
              <h4 className="font-medium text-sm">Amazon Business</h4>
              <p>Everything For</p>
              <p>Your Business</p>
            </div>
          </div>

          <div className="flex flex-col space-y-10">
            <div>
              <h4 className="font-medium text-sm">Audible</h4>
              <p>Download</p>
              <p>Audio Books </p>
            </div>
            <div>
              <h4 className="font-medium text-sm">Prime Now</h4>
              <p>2-Hour Delivery</p>
              <p>on Everyday Items</p>
            </div>
          </div>

          <div className="flex flex-col space-y-10">
            <div>
              <h4 className="font-medium text-sm">DPReview</h4>
              <p>Digital</p>
              <p>Photography</p>
            </div>
            <div>
              <h4 className="font-medium text-sm">Amazon Prime Music</h4>
              <p>75 million songs, ad-free</p>
              <p>Over 10 million podcast episodes</p>
            </div>
          </div>

          <div className="flex flex-col space-y-10">
            <div>
              <h4 className="font-medium text-sm">IMDb</h4>
              <p>Movies, TV</p>
              <p>& Celebrities</p>
            </div>
          </div>
        </div>

        <div className="font-medium text-white pt-5 pb-10 flex flex-wrap justify-center space-x-5 hover_decor select-none">
          <p>© No Copyrights It Just A Clone For learning Purpose.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
