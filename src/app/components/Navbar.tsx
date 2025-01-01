


import Image from "next/image";
import Link from "next/link";
import React from 'react';

export default function Navbar() {
  return (
    <div className="w-full h-[100px] bg-white flex">
      <div className="flex bg-white items-center w-[1286px] mx-auto">
        {/* Logo */}
        <Image 
          src="/Frame168.png" 
          alt="Logo" 
          width={185} 
          height={41} 
          className="mr-6"
        />

        {/* Navigation Links */}
        <div className="flex gap-[56px] pl-[20px] ml-[100px] text-lg">


        <Link href="/"passHref><h2 className="cursor-pointer font-bold">Home</h2></Link> 


          <Link href="/shop"passHref><h2 className="cursor-pointer font-bold">Shop</h2></Link>
          <Link href="/blog"passHref><h2 className="cursor-pointer font-bold">Blog</h2></Link>
          <Link href="/contact"passHref><h2 className="cursor-pointer font-bold">Contact</h2></Link>        
          
        </div>

        {/* Vector Icons */}
        <div className="flex ml-auto gap-[40px]">
          <div className="w-[28px] h-[28px]">
            <img src="/Vector (2).png" alt="Person" />
          </div>  
          <div className="w-[28px] h-[28px]">
            <img src="/Vector (3).png" alt="Search Bar" />
          </div>  
          <div className="w-[28px] h-[28px]">
            <img src="/Vector (4).png" alt="Wishlist" />
          </div>  
          <div className="w-[28px] h-[28px]">
            <img src="/Vector (5).png" alt="Cart" />
          </div>  
        </div>
      </div>
    </div>
  );
}