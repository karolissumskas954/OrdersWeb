import { useState } from 'react';
import styles from '../style'
import { check, shield, plus, person, icon, icon_active } from '../assets'
import { statsLT } from '../constants'

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

SwiperCore.use([Navigation, Pagination]);

const Stats = () => {

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  // Function to update active slide index when Swiper slide changes
  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  return (
    // Desktop
    <section className={`${styles.paddingX1}`}>
      {/* <div className="flex-1 flex-col mt-5 max-md:hidden">
        <div className='grid grid-cols-4 gap-4 '>
          <div className='w-[80%] h-[100%] bg-white rounded-[10px] shadow-2xl relative'>
            <br />
            <p className='p-4 font-poppins font-regular text-black text-[20px]' dangerouslySetInnerHTML={{ __html: statsLT[0].title.replace(/\n/g, '<br>') }}></p>
            <img src={shield} className='w-[23%] absolute top-2 right-2' />
          </div>
          <div className='w-[80%] h-[100%] bg-white rounded-[10px] shadow-2xl relative'>
            <br />
            <p className='p-4 font-poppins font-regular text-black text-[20px]' dangerouslySetInnerHTML={{ __html: statsLT[1].title.replace(/\n/g, '<br>') }}></p>
            <img src={plus} className='w-[23%] absolute top-2 right-2' />
          </div>
          <div className='w-[80%] h-[100%] bg-white rounded-[10px] shadow-2xl relative'>
            <br />
            <p className='p-4 font-poppins font-regular text-black text-[20px]'>{statsLT[2].title}</p>
            <img src={check} className='w-[23%] absolute top-2 right-2' />
          </div>
          <div className='w-[80%] h-[100%] bg-white rounded-[10px] shadow-2xl relative'>
            <br />
            <p className='p-4 font-poppins font-regular text-black text-[20px]'>{statsLT[3].title}</p>
            <img src={person} className='w-[23%] absolute top-2 right-2' />
          </div>
        </div>
      </div> */}

      {/* //Tablet */}
      <div className="swiper-container  max-sm:hidden">
      <Swiper
        slidesPerView={2}
        onSlideChange={handleSlideChange}
        navigation
        pagination={{ clickable: true }}
        className='relative z-5'
      >
          <SwiperSlide className='mb-5'>
            <div className='w-[90%] h-[90%] bg-white rounded-[10px] shadow-xl relative flex my-5 mx-3'>
              <br />
              <p className='p-4 max-w-[75%] font-poppins font-regular text-black text-[16px]'>{statsLT[0].title} </p>
              <img src={shield} className='w-full max-w-[60px] absolute top-[20%] right-4' />
            </div>
          </SwiperSlide>
          <SwiperSlide className='mb-5'>
            <div className='w-[90%] h-[90%] bg-white rounded-[10px] shadow-xl relative flex my-5 mx-3'>
              <br />
              <p className='p-4 max-w-[75%] font-poppins font-regular text-black text-[16px]'>{statsLT[1].title} </p>
              <img src={plus} className='w-full max-w-[60px] absolute top-[20%] right-4' />
            </div>
          </SwiperSlide>
          <SwiperSlide className='mb-5'>
            <div className='w-[90%] h-[90%] bg-white rounded-[10px] shadow-xl relative flex my-5 mx-3'>
              <br />
              <p className='p-4 max-w-[75%] font-poppins font-regular text-black text-[16px]'>{statsLT[2].title} </p>
              
              <img src={check} className='w-full max-w-[60px] absolute top-[20%] right-4' />
            </div>
          </SwiperSlide>
          <SwiperSlide className='mb-5'>
            <div className='w-[90%] h-[90%] bg-white rounded-[10px] shadow-xl relative flex my-5 mx-3'>
              <br />
              <p className='p-4 max-w-[70%] font-poppins font-regular text-black text-[16px]'>{statsLT[3].title}</p>
              
              <img src={person} className='w-full max-w-[60px] absolute top-[20%] right-4 object-cover' />
            </div>
          </SwiperSlide>
      </Swiper>
      <div className="swiper-icons flex justify-center bg-transparent relative z-0 mt-[-15px]">
        <div className={`swiper-icon ${activeSlideIndex === 0 ? 'active' : ''} mx-2`}>
          <img src={activeSlideIndex === 0 ? icon_active : icon} alt="Icon 1" />
        </div>
        <div className={`swiper-icon ${activeSlideIndex === 1 ? 'active' : ''} mx-2`}>
          <img src={activeSlideIndex === 1 ? icon_active : icon} alt="Icon 2" />
        </div>
        <div className={`swiper-icon ${activeSlideIndex === 2 ? 'active' : ''} mx-2`}>
          <img src={activeSlideIndex === 2 ? icon_active : icon} alt="Icon 3" />
        </div>
        {/* <div className={`swiper-icon ${activeSlideIndex === 3 ? 'active' : ''} mx-2`}>
          <img src={activeSlideIndex === 3 ? icon_active : icon} alt="Icon 4" />
        </div> */}
      </div>
    </div>


    {/* Phone */}
    <div className="swiper-container  sm:hidden">
      <Swiper
        slidesPerView={1}
        onSlideChange={handleSlideChange}
        navigation
        pagination={{ clickable: true }}
        className='relative z-5'
      >
          <SwiperSlide className='mb-5'>
            <div className='w-[90%] h-[90%] bg-white rounded-[10px] shadow-xl relative flex my-5 mx-3'>
              <br />
              <p className='p-4 max-w-[75%] font-poppins font-regular text-black text-[16px]'>{statsLT[0].title} </p>
              <img src={shield} className='w-[23%] max-w-[60px] absolute top-[23%] right-4' />
            </div>
          </SwiperSlide>
          <SwiperSlide className='mb-5'>
            <div className='w-[90%] h-[90%] bg-white rounded-[10px] shadow-xl relative flex my-5 mx-3'>
              <br />
              <p className='p-4 max-w-[75%] font-poppins font-regular text-black text-[16px]'>{statsLT[1].title} </p>
              <img src={plus} className='w-[23%] max-w-[60px] absolute top-[23%] right-4' />
            </div>
          </SwiperSlide>
          <SwiperSlide className='mb-5'>
            <div className='w-[90%] h-[90%] bg-white rounded-[10px] shadow-xl relative flex my-5 mx-3'>
              <br />
              <p className='p-4 max-w-[75%] font-poppins font-regular text-black text-[16px]'>{statsLT[2].title} </p>
              
              <img src={check} className='w-[23%] max-w-[60px] absolute top-[23%] right-4' />
            </div>
          </SwiperSlide>
          <SwiperSlide className='mb-5'>
            <div className='w-[90%] h-[90%] bg-white rounded-[10px] shadow-xl relative flex my-5 mx-3'>
              <br />
              <p className='p-4 max-w-[70%] font-poppins font-regular text-black text-[16px]'>{statsLT[3].title}</p>
              
              <img src={person} className='w-[23%] max-w-[60px] absolute top-[23%] right-4 object-cover' />
            </div>
          </SwiperSlide>
      </Swiper>
      <div className="swiper-icons flex justify-center bg-transparent relative z-0 mt-[-15px]">
        <div className={`swiper-icon ${activeSlideIndex === 0 ? 'active' : ''} mx-2`}>
          <img src={activeSlideIndex === 0 ? icon_active : icon} alt="Icon 1" />
        </div>
        <div className={`swiper-icon ${activeSlideIndex === 1 ? 'active' : ''} mx-2`}>
          <img src={activeSlideIndex === 1 ? icon_active : icon} alt="Icon 2" />
        </div>
        <div className={`swiper-icon ${activeSlideIndex === 2 ? 'active' : ''} mx-2`}>
          <img src={activeSlideIndex === 2 ? icon_active : icon} alt="Icon 3" />
        </div>
        <div className={`swiper-icon ${activeSlideIndex === 3 ? 'active' : ''} mx-2`}>
          <img src={activeSlideIndex === 3 ? icon_active : icon} alt="Icon 4" />
        </div>
      </div>
    </div>

    </section>
  )
}
export default Stats