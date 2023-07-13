import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function Slide() {
  const slides = [
    {
      url: 'https://preview.colorlib.com/theme/fashi/img/hero-1.jpg',
      caption: 'hello'
    },
    {
      url: 'https://preview.colorlib.com/theme/fashi/img/hero-2.jpg',
      caption: 'hello'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };


  return (
    <div className='max-w-[1500px] h-[780px] w-full m-auto py-15  relative '>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'>

        {/* <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' /> */}
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-black'>
          <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
            <p className='text-orange-400'>BAG,KIDS</p>
            <h1 className='font-bold text-4xl md:text-6xl drop-shadow-2xl'>
              Black friday
            </h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, possimus?
            </p>
            <button className='bg-orange-400 text-white shadow-md mt-[30px] p-3'>SHOP NOW</button>
          </div>
        </div>

      </div>
      {/* Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl  text-orange-500 cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl text-orange-500 cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

    </div>
  );
}

export default Slide;

