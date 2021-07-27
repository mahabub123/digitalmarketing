import React from "react";

const InfoSection = ({ lightBg ,topline,headline,description,img,buttonlabel,imgStart }) => {
  return (
    <>
      <section className={`text-gray-600 body-font ${lightBg?'bg-sectionWhite':'bg-primary'} ${lightBg?'text-secondary':'text-sectionWhite'}`}>
        <div className={`container mx-auto flex px-5 py-24 flex-col items-center ${imgStart?'f-row-reverse':'f-row'} gap-14`}>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
              {topline}
              <br className="hidden lg:inline-block" />
              {headline}
            </h1>
            <p className="mb-8 leading-relaxed">{description}</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                {buttonlabel}
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={img}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default InfoSection;
