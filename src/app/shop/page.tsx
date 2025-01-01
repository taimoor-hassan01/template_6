
import Image from "next/image";
import ParentComponentshops from "../components/ParentComponentshops";
import Link from "next/link";

export default function Shop() {
  return (
    <div className="w-full bg-white">
      {/* Main Image Section */}
      <div className="flex justify-center bg-white py-10">
        <Link href="/shop/singleproductpage">
          <Image 
            src="/shopmainpic.png" 
            alt="shopmainpic" 
            width={1440} 
            height={316}
            className="cursor-pointer"
          />
        </Link>

        <h2 
    className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-4xl text-black">
    SHOP
  </h2>




      </div>

      {/* Parent Component */}
      <div className="py-10">
        <ParentComponentshops />
      </div>
    </div>
  );
}