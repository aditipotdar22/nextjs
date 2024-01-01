// components/OptionsComponent.tsx

"use client";

import Image from 'next/image';
import { useState } from 'react';

const TwoColumnLayout = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const options = [
    { id: 1,
     label: 'Increase bottom line by reducing costs and increasing efficiency',
     details: 'Automations to increase the efficiency in both AP and AR sides.',
    },
    { id: 2,
      label: 'A tool for CFOs to analyze the cash flow and simulate what-if scenarios', 
      details: 'On time follow-ups with customers enables quicker realization of revenues' 
    },
    { id: 3, 
      label: 'Use integrated financing to fulfill cash flow gaps just in time', 
      details: 'Tools like dynamic discounting to increase bottom line' 
    },
  ];

  return (
    <div className="flex">
      {/* Left Column - Options */}
      <div className="w-1/2">
        <ul>
          {options.map((option,index, array) => (
            <li
              key={option.id}
              className={`cursor-pointer p-4 my-7 flex ${index === array.length - 1 && "mb-0"} ${index === 0 && "mt-0"} ${selectedOption === option.id ? "bg-[url('/bg-gradient.png')] text-white rounded-l-lg" : 'bg-white shadow-md mr-7 text-neutral-600 rounded'}`}
              onClick={() => setSelectedOption(option.id)}
            >
              {option.label}
              <Image
               src={`${selectedOption === option.id ? './arrow-white-svg.svg' : './arrow-gray-svg.svg'}`}
               alt="Arrow Right"
               width={23}
               height={23}
               className='ml-2'
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Right Column - Details */}
      <div className={"w-1/2 p-4 bg-cyan-800 text-white rounded"}>
        {selectedOption &&(
          <div className='flex'>
            <Image
              src={"/circle-arrow.svg"}
              alt="Arrow Right"
              width={19}
              height={19}
              className='mr-2'
            />
            <p>{options[selectedOption - 1].details}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TwoColumnLayout;
