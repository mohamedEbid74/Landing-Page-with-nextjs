import Image from "next/image";

const Guid = () => {
  return (
    <>
      <section className='max-container'>
        <div className='flex flex-col '>
          <div className='px-4'>
            {" "}
            <Image src='/camp.svg' width={50} height={50} alt='camp' />
            <p className='text-green-50 uppercase font-medium'>
              we are here for you
            </p>
            <div className='flex justify-between items-center xs:flex-col md:flex-row'>
              <h1 className='capitalize bold-40 lg:bold-64 md:max-w-[390px] mt-4'>
                Guide You to Easy Path
              </h1>
              <p className='text-gray-50 mt-8 xl:max-w-[520px]'>
                Only with the hilink application you will no longer get lost and
                get lost again, because we already support offline maps when
                there is no internet connection in the field. Invite your
                friends, relatives and friends to have fun in the wilderness
                through the valley and reach the top of the mountain
              </p>
            </div>
          </div>
          <div className='flex justify-center items-center relative mt-16 w-full'>
            <Image
              src='/boat.png'
              alt='boat'
              width={1440}
              height={580}
              className='w-full object-cover object-center 2xl:rounded-5xl'
            />
            <div className='absolute bg-white rounded-3xl shadow-md flex gap-8 flex-col py-4 px-3 border md:left-[5%] lg:top-20'>
              <div className='flex gap-5'>
                <Image
                  src='/meter.svg'
                  alt='meter'
                  width={16}
                  height={288}
                  className='h-full w-auto'
                />
                <div className='flex flex-col'>
                  <div className='flex justify-center items-center gap-20'>
                    <p className='text-gray-30'>Destination</p>
                    <p className='text-green-700 bold-16'>48 min</p>
                  </div>
                  <p className='bold-20 mt-4'>Aguas Calientes</p>
                  <div className='mt-8'>
                    <p className='text-gray-30 capitalize'>start track</p>
                    <p className='bold-20 mt-4'>Wonorejo Pasuruan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Guid;
