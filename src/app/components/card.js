import Image from "next/image";

const Card  = ({ data }) => (
  <div className='grid grid-cols-4 gap-2 place-items-center mb-5'>
    {data.map(({ title, description, source }) => (
      <div className='col-span-1 flex flex-col items-center' key={title}>
        {/* Use the imported Image component */}
        <Image
          src={source}
          alt={title} // Use the title as alt text
          width={50}
          height={50}
          className='mb-4'
        />
        <div className="text-sky-900 text-lg font-semibold font-inter leading-21 mb-4">{title}</div>
        <div className="w-72 text-center text-black text-sm font-normal font-inter leading-18 mb-4">{description}</div>
      </div>
    ))}
  </div>
);

export default Card;
