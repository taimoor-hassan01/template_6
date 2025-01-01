import React from 'react';
import ChildComponent from './ChildComponent';
import Image from 'next/image';

const ArrayMap1 = () => {
  const ParentComponent = [
    { 
      image: <Image src="/dining.png" alt="dining" width={381} height={480} />, 
      furName: "Dining",
    },
    { 
      image: <Image src="/living.png" alt="living" width={381} height={480} />,
      furName: "Living",
    },
    { 
      image: <Image src="/bedroom.png" alt="bedroom" width={381} height={480} />,
      furName: "Bedroom",  
    }
  ];

  return (
    <div className="flex justify-center space-x-8 mt-10">    
      {ParentComponent.map((fur, index) => {
        return (
          <div key={index} className="flex flex-col items-center">
            <div>{fur.image}</div>
            <h4 className="mt-2 text-lg font-semibold">{fur.furName}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default ArrayMap1;