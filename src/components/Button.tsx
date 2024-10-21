import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  purpose?: string;
  height?: number;
  bgColor?: "transparent" | "white" | "primary";
  disabled?: boolean;
  onClick?: () => void;
}

function Button({ children, type, height, bgColor, purpose, disabled, onClick }: ButtonProps) {
  const baseButtonClassName = "flex justify-center items-center flex-shrink-1";
  let AddButtonClassName = "";
  const inquiryHover = `hover:bg-gray-200 hover:font-semibold`;
  const inquiryFocus = `focus:bg-gray-200 focus:font-semibold`;
  const defaultHover = `hover:opacity-70`;
  const defaultFocus = `focus:opacity-70`;
  let countClassName = `inline-flex justify-center items-center text-xl w-full h-full`;

  switch (bgColor) {
    case "primary": {
      AddButtonClassName = `bg-primary text-white ${defaultHover} ${defaultFocus}`;
      break;
    }
    case "transparent": {
      AddButtonClassName = `bg-transparent text-primary border border-solid border-primary ${defaultHover} ${defaultFocus}`;
      break;
    }
    case "white": {
      AddButtonClassName = `bg-white text-content border border-solid border-gray-400 ${defaultHover} ${defaultFocus}`;
      break;      
    }
  }

  if (disabled) {
    AddButtonClassName = `text-white bg-gray-100 cursor-not-allowed`;
  }

  switch (height) {
    case 54: {
      AddButtonClassName += ` h-54`;
      break;
    }
    case 44: {
      AddButtonClassName += ` h-44`;
      break;
    }
  }
  
  if (purpose == "inquiry") {
    return (
      <button type={type} className={`${baseButtonClassName} paragraph text-md text-content w-140 h-40 bg-transparent border border-solid border-gray-200 ${inquiryHover} ${inquiryFocus}`} onClick={onClick}>{ children }</button>
    )
  }

  if (purpose == "count") {
    return (
      <div className="flex justify-center items-center border border-solid border-gray-200">
        <button type="button" className="border-none w-30 h-30" aria-label="minus" disabled><span className={`icon icon-minus text-gray-300 ${countClassName} cursor-not-allowed`} aria-hidden="true"></span></button>
        {/* <button type="button" className="border-none w-30 h-30"><span className={`icon icon-minus text-content ${countClassName}`} aria-hidden="true"></span></button> */}
        <span className="label text-md text-black mx-8">1</span>
        <button type="button" className="border-none w-30 h-30" aria-label="plus"><span className={`icon icon-plus text-content ${countClassName}`} aria-hidden="true"></span></button>
      </div>

    )
  }

  return (
    <button type={type} className={`${baseButtonClassName} label text-md w-full ${AddButtonClassName} rounded`} onClick={onClick} disabled={disabled}>{ children }</button>
  )
}

export default Button;