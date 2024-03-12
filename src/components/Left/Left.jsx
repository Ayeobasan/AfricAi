import thread from "../../assets/img.svg";
import { Alltimelines } from "../timelines/Alltimelines";
const Left = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col justify-between items-center">
        <div className=" absolute xlg:fixed m-auto   inset-0 text-white -z-10 overflow-hidden bg-black xlg:right-[calc(max(2rem,50%-38rem)+40rem)] xlg:min-w-[32rem]">
          <svg
            className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] xlg:-right-40 xlg:bottom-auto xlg:left-auto xlg:top-[-40%] xlg:h-[180%] xlg:w-[80rem]"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id=":S1:-desktop" cx="100%">
                <stop offset="0%" stopColor="rgba(184, 134, 11, 0.3)"></stop>
                <stop
                  offset="53.95%"
                  stopColor="rgba(184, 134, 11, 0.09)"
                ></stop>
                <stop offset="100%" stopColor="rgba(10, 14, 23, 0)"></stop>
              </radialGradient>
              <radialGradient id=":S1:-mobile" cy="100%">
                <stop offset="0%" stopColor="rgba(184, 134, 11, 0.3)"></stop>
                <stop
                  offset="53.95%"
                  stopColor="rgba(184, 134, 11, 0.09)"
                ></stop>
                <stop offset="100%" stopColor="rgba(10, 14, 23, 0)"></stop>
              </radialGradient>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#:S1:-desktop)"
              className="hidden lg:block"
            ></rect>
            <rect
              width="100%"
              height="100%"
              fill="url(#:S1:-mobile)"
              className="lg:hidden"
            ></rect>
          </svg>
          <div className=" z-10 flex flex-col justify-center items-center align-middle h-[100vh]  m-auto">
            <div className="flex  justify-center">
              <a className="flex justify-center w-1/2" href="/">
                <img
                  alt="Logo"
                  loading="lazy"
                  width="500"
                  height="500"
                  className="w-full"
                  src="https://www.africai.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.8e85cc21.png&w=640&q=75"
                />
              </a>
            </div>
            <div className="flex flex-col  w-full ">
              <div className=" relative items-center flex flex-col space-y-4">
                <h1 className="mt-14 font-display text-xl/tight font-medium text-white text-center">
                  We unite africa through technology.
                </h1>
                {/* <button className=" bg-[#382b2b77] font-bold rounded-md border border-[#4a4040] p-2 w-[50%]">
                  BOOK A CALL
                </button> */}
                <div className="relative w-[90%] sm:w-[60%] md:w-[50%] xlg:w-[70%] isolate mt-8 flex items-center pr-1">
                  <button
                    className="w-full bg-opacity-60 py-3 group relative isolate flex-none rounded-md  text-[0.8125rem]/6 font-semibold text-white px-2.5"
                    type="button"
                  >
                    <span className="absolute inset-0 rounded-md bg-gradient-to-b from-white/80 to-white opacity-10 transition-opacity group-hover:opacity-15"></span>
                    <a
                      href="https://tidycal.com/cyprianaarons263/30-minute-meeting"
                      target="_blank"
                      rel="noreferrer"
                      className="uppercase tracking-widest"
                    >
                      Book a call
                    </a>{" "}
                  </button>
                </div>
              </div>
              {/* <div className="flex justify-center absolute bottom-5 w-full">
                <div className="flex justify-between  text-sm w-[60%] sm:w-[38%] lg:w-[45%] m-auto">
                  <p className="text-gray-500  w-full">Brought to you by</p>
                  <div className="flex px-2 justify-between w-full rounded-md hover:bg-[#251f1f77]">
                    <i>i</i>
                    <p>Cyprian Aarons</p>
                  </div>
                </div>
              </div> */}

              <div className="m-auto absolute bottom-0 w-full flex">
                <div className="flex flex-1 items-center justify-center pb-4 lg:justify-center lg:pb-6">
                  <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
                    Brought to you by
                    <a
                      className="group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-2"
                      href="https://twitter.com/cyprianaarons"
                    >
                      <span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
                      <svg
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        fill="currentColor"
                        className="flex-none h-6 w-6"
                      >
                        <path d="M5.526 13.502c5.032 0 7.784-4.168 7.784-7.783 0-.119 0-.237-.008-.353a5.566 5.566 0 0 0 1.364-1.418 5.46 5.46 0 0 1-1.571.431c.571-.342.998-.88 1.203-1.513a5.483 5.483 0 0 1-1.737.664 2.738 2.738 0 0 0-4.662 2.495 7.767 7.767 0 0 1-5.638-2.858 2.737 2.737 0 0 0 .847 3.651 2.715 2.715 0 0 1-1.242-.341v.035a2.737 2.737 0 0 0 2.195 2.681 2.73 2.73 0 0 1-1.235.047 2.739 2.739 0 0 0 2.556 1.9 5.49 5.49 0 0 1-4.049 1.133A7.744 7.744 0 0 0 5.526 13.5"></path>
                      </svg>
                      <span className="self-baseline text-white">
                        Cyprian Aarons
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
