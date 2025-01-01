

import Image from "next/image";
import ArrayMap1 from "./components/ParentComponent";
import ArrayMap2 from "./components/ParentComponentproducts";


export default function Home() {
  return (
    <div>
      {/* Image Section */}
      <div className="h-screen justify-center overflow-x-hidden items-center mt-0 w-[1440px] flex mx-auto relative">
        <div className="relative w-full h-[718px]">
          {/* Main Image */}
          <Image
            src="/scandinavian.png"
            alt="Interior"
            width={1440}
            height={718}
            className="absolute top-0 w-full object-cover"
          />

          {/* Rectangle Image */}
          <div className="absolute top-1/2 right-[5%] transform -translate-y-1/2 w-[643px] h-[443px] bg-[#FFF3E3] flex flex-col justify-start items-start p-6">
            {/* Text Content */}
            <p className="text-sm text-gray-500 mb-4">New Arrival</p>

            <h2 className="text-[#B88E2F] font-extrabold justify-center md:text-1xl text-3xl mb-4">
              Discover Our
            </h2>
            <h2 className="text-[#B88E2F] font-extrabold justify-center md:text-1xl text-3xl mb-4">
              New Collection
            </h2>
            <ul className="text-[#000000]">
              <li className="mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, ipsam veritatis
                optio autem quam consectetur labore eaque excepturi esse blanditiis corrupti sequi
                sapiente aliquid quibusdam alias, mollitia quisquam, perferendis vitae!
              </li>
            </ul>
            {/* Button Positioned on the Left */}
            <button className="mt-6 w-[222px] h-[50px] rounded-sm bg-[#B88E2F] text-white font-medium">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* Parent Component */}

      <div>
  <h1 className="text-2xl font-bold text-center mt-8">Browse the Range</h1>
  <p className="max-w-2xl mx-auto mt-4 text-center text-lg text-gray-700">
    May Almighty Allah prevent our holy Land of Pakistan from Evil eyes and destroy all those culprits who 
    are looting hard-earned money of the innocent people of Pakistan and do not hesitate to shed the blood of innocent
    people for their ulterior motives.
  </p>
  < ArrayMap2/>
</div>


<div>
  <h1 className="text-2xl font-bold text-center mt-8">Our Products</h1>
  
  <ArrayMap1 />

</div>

   <div className="flex justify-center mt-2 items-center">
      <Image src="/showmore.png" alt="showmore" width={245} height={48} />
    </div>

    <div className="flex w-[1440px] h-[625px] bg-[#f2eeee] text-black mt-2 items-center">
      <div>
      <h2 className="font-extrabold justify-left text-2xl">   50 + Beautiful  </h2>
      <h2 className="font-extrabold justify-left text-2xl">   rooms inspiration  </h2>


      <p className="max-w-2xl mx-auto mt-4 text-justify text-lg  text-gray-700">
    May Almighty Allah prevent our holy Land of Pakistan.
     
  </p>
  <button className="mt-6 w-[222px] h-[50px] rounded-sm bg-[#B88E2F] text-white font-medium">
              EXPLORE MORE
            </button>    


      </div>  

      <div className="flex justify-center mt-2 items-center">
      <Image src="/innerpeace.png" alt="INNER PEACE" width={404} height={582} />
      <Image src="/dinningtable.png" alt="dinningtable" width={372} height={486} />
      <Image src="/sidetable.png" alt="sidetable" width={372} height={486} />  


      
     </div>   
      
      
      
    </div>
      
    </div>
  );
}