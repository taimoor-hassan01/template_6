// import Image from "next/image";

// export default function Forms() {
//   return (
//     <div className="w-full h-[316px] bg-white flex">
//       <div className="flex bg-white items-center w-[1286px] mx-auto">
//         {/* Logo */}
//         <Image 
//           src="/shopmainpic.png" 
//           alt="shopmainpic" 
//           width={1440} 
//           height={316} 
//         //   className="mr-6"
//         />

//         </div>

//         <h1 className="text-5xl font-semibold text-center uppercase">
//                         enter your details
//                     </h1>
        
//                     <div>
//                     <form className="mt-10 flex gap-5 justify-center items-center flex-col border">
//                         <input type="email" className="p-2 rounded-2xl w-2/5 border border-red-800"
//                          placeholder="Enter your Email" />
        
//                         <input type="password" className="p-2 rounded-2xl w-2/5 border border-red-800" 
//                         placeholder="Enter your Password" />
        
//                         <button className=" py-3 px-7 rounded-lg bg-blue-500 text-white">Place your order</button>
//                     </form>

//         <div>
                    
//                     </div>
        
//                 </div>
            




//         </div>

//         )
//         }

import Image from "next/image";

export default function Forms() {
  return (
    <div className="w-full bg-white">
      {/* Image Section */}
      

<div className="w-full relative flex justify-center">
  <Image 
    src="/shopmainpic.png" 
    alt="shopmainpic" 
    width={1440} 
    height={316} 
    className="object-cover" 
  />
  <h2 
    className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
    CONTACT
  </h2>
</div>


      {/* Form Section */}
      <div className="mt-8 text-center">
        <h1 className="text-4xl font-semibold uppercase mb-6">
          Enter Your Details
        </h1>

        <form className="mt-4 flex flex-col gap-5 justify-center items-center">
          <input 
            type="text" 
            className="p-3 rounded-xl w-1/3 border border-gray-300 focus:border-blue-500 focus:outline-none" 
            placeholder="Enter your Name" 
          />

          <input 
            type="email" 
            className="p-3 rounded-xl w-1/3 border border-gray-300 focus:border-blue-500 focus:outline-none" 
            placeholder="Enter your email" 
          />

          <input 
            type="text" 
            className="p-3 rounded-xl w-1/3 border border-gray-300 focus:border-blue-500 focus:outline-none" 
            placeholder="Subject" 
          />


           <input 
            type="text" 
            className="p-3 rounded-xl w-1/3 border border-gray-300 focus:border-blue-500 focus:outline-none" 
            placeholder="Message" 
          />

          <button 
            type="submit" 
            className="py-3 px-7 rounded-lg bg-[#B88E2F] text-white hover:bg-blue-600 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}






        
                
        
            