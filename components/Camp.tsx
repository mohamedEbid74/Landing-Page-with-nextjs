import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subTitle: string;
  peopleJoined: string;
}
const CampSite = ({
  backgroundImage,
  title,
  subTitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`${backgroundImage} h-full w-full max-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className='flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10'>
        <div className='flex gap-4 items-start'>
          <div className='bg-green-600 rounded-full p-2'>
            <Image src='/folded-map.svg' alt='map' width={28} height={28} />
          </div>
          <div className='text-white'>
            <h4 className='bold-18'>{title}</h4>
            <p className='regular-14 text-gray-20'>{subTitle}</p>
          </div>
        </div>
        <div className='flex items-center justify-between gap-5'>
          <span className='flex overflow-hidden -space-x-4 sap'>
            {PEOPLE_URL.map((url) => {
              return (
                <Image
                  className='inline-block h-10 w-10 rounded-full'
                  src={url}
                  key={url}
                  alt='person'
                  width={52}
                  height={52}
                />
              );
            })}
          </span>
          <p className='text-white bold-16 md:bold-20'>{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};
const Camp = () => {
  return (
    <>
      <section className='px-4 xs:w-full  md:w-[80%] relative flex flex-col  py-10 lg:mb-10 lg:py-20 xl:mb-20  m-auto '>
        <div className='overflow-y-auto'>
          <div className=' hide-scrollbar flex h-[340px] w-[2000px] items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
            <CampSite
              backgroundImage='bg-bg-img-1'
              title='Putuk Truno Camp'
              subTitle='Prigen, Pasuruan'
              peopleJoined='50+ Joined'
            />
            <CampSite
              backgroundImage='bg-bg-img-2'
              title='Mountain View Camp'
              subTitle='Somewhere in the Wilderness'
              peopleJoined='80+ Joined'
            />
          </div>
        </div>
        <div>
          <div className='flex justify-end items-center mt-10 px-8 xl:-mt-48 xl:mr-6 xl:max-w-[40%] bg-green-600  rounded-xl xl:mx-[50%]'>
            <div className='text-white py-10 relative'>
              <h1 className='xs:text-[25px] md:text-[50px]'>
                <strong>Feeling Lost </strong>And Not Knowing The Way?
              </h1>
              <p className='text-gray-10 xs:text-[15px] mt-6'>
                Starting from the anxiety of the climbers when visiting a new
                climbing location, the possibility of getting lost is very
                large. That's why we are here for those of you who want to start
                an adventure
              </p>
              <Image
                src='/quote.svg'
                alt='camp-2'
                width={186}
                height={219}
                className='absolute top-48 right-0'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Camp;
