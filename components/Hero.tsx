import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <section className='max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row relative overflow-hidden'>
        <div className='hero-map z-[-1] w-full' />
        {/* left side */}
        <div className='relative z-20 flex flex-col flex-1 xl:w-1/2'>
          <Image
            className='absolute top-[-30px] left-[-5px] w-10 lg:w-[50px]'
            src='/camp.svg'
            alt='camp'
            width={24}
            height={24}
          />
          <h1 className='bold-52 lg:bold-88'>Putuk Truno Camp Area</h1>
          <p className='regular-16 mt-16 text-gray-30 xl:max-w-[520px]'>
            We want to be on each of your journeys seeking the satisfaction of
            seeing the incorruptible beauty of nature. We can help you on an
            adventure around the world in just one app
          </p>
          <div className='flex my-11 gap-4 flex-wrap'>
            <div className='flex items-center gap-2'>
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <Image
                    src='/star.svg'
                    key={index}
                    alt='star'
                    width={24}
                    height={24}
                  />
                ))}
            </div>
            <p className='bold-16 lg:bold-20 text-blue-70'>
              198k
              <span className='regular-16 lg:regular-20 ml-1'>
                Excellent Reviews
              </span>
            </p>
          </div>
          <div className='flex xs:flex-col w-full gap-4 sm:flex-row'>
            <Button type='button' variant='btn_green' title='Download App' />
            <Button
              type='button'
              variant='btn_white-text'
              title='How we woork?'
              icone='/play.svg'
            />
          </div>
        </div>
        {/* Right side */}
        <div className='ralative flex flex-1 items-start'>
          <div className='relative z-20 flex flex-col w-[268px] gap-8 rounded-2xl bg-green-90 py-8 px-7'>
            <div className='flex flex-col'>
              <div className='flex justify-between'>
                <p className='text-gray-20 regular-16'>Location</p>
                <Image src='/close.svg' alt='close' width={24} height={24} className="cursor-pointer"/>
              </div>
              <p className='text-white bold-20'>Aguas Calientes</p>
            </div>
            <div className="flex justify-between">
              <div>
                <p className="text-gray-20 regular-16">Distance</p>
                <p className='text-white bold-20'>173.28 mi</p>
              </div>
            <div>
                <p className="text-gray-20 regular-16">Elevation</p>
                <p className='text-white bold-20'>2.040 km</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
