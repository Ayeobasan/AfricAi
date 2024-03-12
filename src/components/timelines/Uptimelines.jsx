const UpTimelines = () => {
  return (
    <div>
      <div className=" ">
        <div className="clock-tick  "></div>
        <div className="clock-tick "></div>
        <div className="clock-tick "></div>
        <div className="clock-tick "></div>
        <div className="clock-tick "></div>
        <div className="clock-tick "></div>
        <div className="clock-tick "></div>
        <div className="clock-tick "></div>
        <div className="clock-tick "></div>
        <div className="clock-tick "></div>
        <div className="clock-tick "></div>
        <div className="clock-tick "></div>
        <div className="clock-tick "></div>
        <div className="clock-tick "></div>
        <div className="clock-tick "></div>
        <div className="clock-tick "></div>
        {/* <div className="flex absolute align-middle w-[150px] items-center">
          <p className=" text-[12px] text-gray-400 ">Jan 1, 2023 </p>
          <div className="clock-tickwhite w-[25px] mb-1 h-[1px] bg-[red] "></div>
        </div> */}
        <div className="">
          <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
            <div className="flex w-[150px] align-middle items-center">
              <a className="inline-flex" href="#africai">
                <time
                  className="hidden 2023-01-01T00:00:00.000Z"
                  // className=" hidden text-2xs/4 font-medium text-gray-500 dark:text-white/50"
                >
                  
                  Jan 1, 2023
                </time>
              </a>
              <div className="  w-[25px] mb-1 ml-9 xlg:ml-14 xl:ml-0 h-[1px] bg-gray-500 xl:bg-white"></div>


              
            </div>
          </div>
        </div>

        {/* <div className="flex absolute  top-[8.4rem] w-[150px] gap-3 align-middle flex-row-reverse items-center">
          <div className="clock-tickwhite w-[25px] h-[1px] bg-[red] "></div>
          <p className=" text-[12px] text-gray-400 ">
            Jan 1, 2023{" "}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default UpTimelines;
