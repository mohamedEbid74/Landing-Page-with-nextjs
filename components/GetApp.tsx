import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="xs:mt-20 lg:mt-0">
      <div className='get-app'>
        <div className="flex flex-col gap-8 justify-center">
          <h1 className="bold-40 xl:bold-64 xl:max-w-[340px]">Get for free now!</h1>
          <p className="text-gray-10 ">Available on iOS and Android</p>
          <div className="flex xs:flex-col md:flex-row w-full gap-4">
            <Button
              type='button'
              title='App Store'
              variant='btn_white'
              icone='/apple.svg'
            />
            <Button
              type='button'
              title='Play Store'
              variant='btn_dark_green_outline'
              icone='/android.svg'
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-1">
          <Image
            src='/phones.png'
            alt='phones'
            width={550}
            height={870}
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
