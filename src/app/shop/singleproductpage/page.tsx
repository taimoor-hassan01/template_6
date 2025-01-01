import Image from "next/image";

export default function Shop() {
  return (
    <div className="w-full h-auto flex justify-center py-10 bg-gray-100">
      <div className="flex items-center">
        {/* Main Image */}
        <Image 
          src="/Asguard.png" 
          alt="Asgaard" 
          width={1440} 
          height={820} 
          className="object-cover"
        />
      </div>
    </div>
  );
}