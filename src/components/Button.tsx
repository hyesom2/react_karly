import { ReactNode } from 'react';

interface ButtonProps {
  purpose?: "inquiry";
  children: ReactNode;
  onClick?: () => void;
}

function Button({ purpose, children, onClick }: ButtonProps) {
  let ButtonClassName = "";

  switch (purpose) {
    case "inquiry": {
      ButtonClassName = "paragraph text-md text-content w-140 h-40 bg-white border border-solid border-gray-200 rounded-1 hover:border-2 focus:bg-gray-200 active:border-2";
    }
  }
  return (
    <button type="button" className={ ButtonClassName } onClick={ onClick }>{ children }</button>
  )
}

export default Button;

// function Buttons({ bgColor, purpose, children }: ButtonProps) {
//   let AddClassName = "";

//   switch (bgColor) {
//     case "primary": {
//       AddClassName += "bg-primary text-white"
//       break;
//     }
//     case "white": {
//       AddClassName += "bg-white text-content"
//       break;
//     }
//   }

//   switch (purpose) {
//     case "inquiry": {
//       AddClassName += " text-md border border-solid border-gray-200 rounded w-140 h-40";
//       break;
//     }
//     case "cancel": {
//       AddClassName += " text-md border border-solid border-gray-400 rounded w-174 h-54";
//       break;
//     }
//     case "add-cart": {
//       AddClassName += " text-md rounded w-174 h-54";
//       break;
//     }
//   }
//   return (
//     <>
//       <div className="buttons-footer">
//         <button
//           type="button"
//           // className={`${AddClassName} ${className}`}
//           className={ AddClassName }
//         >
//           { children }
//         </button>
//       </div>
//     </>
//   )
// }

// export default Buttons;