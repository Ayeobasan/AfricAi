import "./App.css";
import Left from "./components/Left/Left";
import Right from "./components/Right/Right";
import { Alltimelines } from "./components/timelines/Alltimelines";

function App() {
  return (
    <>
      <div className=" xlg:flex ">
        <Left />

        <div className="flex relative">
          <Right />
          <div className="absolute left-[-2.2rem]  sm:left-0 md:left-[6rem] xl:left-[9.8rem] ">
            <Alltimelines />
          </div>
        </div>
      </div>
    </>
  );
}

//     <svg
// className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]"
// aria-hidden="true"
// >
// <defs>
//   <radialGradient id=":S1:-desktop" cx="100%">
//     <stop offset="0%" stop-color="rgba(184, 134, 11, 0.3)"></stop>
//     <stop offset="53.95%" stop-color="rgba(184, 134, 11, 0.09)"></stop>
//     <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
//   </radialGradient>
//   <radialGradient id=":S1:-mobile" cy="100%">
//     <stop offset="0%" stop-color="rgba(184, 134, 11, 0.3)"></stop>
//     <stop offset="53.95%" stop-color="rgba(184, 134, 11, 0.09)"></stop>
//     <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
//   </radialGradient>
// </defs>
// <rect
//   width="100%"
//   height="100%"
//   fill="url(#:S1:-desktop)"
//   className="hidden lg:block"
// ></rect>
// <rect
//   width="100%"
//   height="100%"
//   fill="url(#:S1:-mobile)"
//   classNameName="lg:hidden"
// ></rect>
// </svg>

export default App;

// import thread from "../../assets/img.svg";
// const Left = () => {
//   return (
//     <div className="w-full flex flex-col justify-cente items-center">
//       <div className="absolute inset-0 text-white -z-10 overflow-hidden bg-black lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
//         <svg
//           className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]"
//           aria-hidden="true"
//         >
//           <defs>
//             <radialGradient id=":S1:-desktop" cx="100%">
//               <stop offset="0%" stop-color="rgba(184, 134, 11, 0.3)"></stop>
//               <stop
//                 offset="53.95%"
//                 stop-color="rgba(184, 134, 11, 0.09)"
//               ></stop>
//               <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
//             </radialGradient>
//             <radialGradient id=":S1:-mobile" cy="100%">
//               <stop offset="0%" stop-color="rgba(184, 134, 11, 0.3)"></stop>
//               <stop
//                 offset="53.95%"
//                 stop-color="rgba(184, 134, 11, 0.09)"
//               ></stop>
//               <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
//             </radialGradient>
//           </defs>
//           <rect
//             width="100%"
//             height="100%"
//             fill="url(#:S1:-desktop)"
//             className="hidden lg:block"
//           ></rect>
//           <rect
//             width="100%"
//             height="100%"
//             fill="url(#:S1:-mobile)"
//             className="lg:hidden"
//           ></rect>
//         </svg>
//         <div className="flex justify-center">
//           <a className="flex justify-center w-1/2" href="/">
//             <img
//               alt="Logo"
//               loading="lazy"
//               width="500"
//               height="500"
//               className="w-4/5 h-auto"
//               src={thread}
//             />
//           </a>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default Left;
