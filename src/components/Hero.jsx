import React from 'react';
import styles from '../style';
import { discount, robot } from '../assets';
import GetStarted from './GetStarted';

const Hero = () => (
  <section id="home" className={`flex flex-col md:flex-row ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col px-6 sm:px-16 xl:px-0`}
    >
      <div className="bg-discount-gradient mb-2 flex flex-row items-center rounded-[10px] px-4 py-[6px]">
        <img src={discount} alt="discount" className="h-[32px] w-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white"> 20%</span> Discount For{' '}
          <span className="text-white">1 Month</span> Account
        </p>
      </div>
      <div className="flex w-full flex-row items-center justify-between ">
        <h1 className="flex-1 font-poppins ss:text-[72px] ss:leading-[100px] text-[52px] font-semibold leading-[75px] text-white">
          The Next <br className="hidden sm:block" />{' '}
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="ss:flex mr-0 hidden md:mr-4">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins ss:text-[68px] ss:leading-[100px] text-[52px] font-semibold leading-[75px] text-white w-full">
        Payment Method
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={robot}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"></div>
      <div className="absolute z-[0] w-[50%] h-[55%] right-20 bottom-20 blue__gradient"></div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </div>
  </section>
);

export default Hero;
