import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  purpose?: string;
  height?: number;
  bgColor?: "transparent" | "white" | "primary";
  disabled?: boolean;
  onClick?: () => void;
}

function Button({ children, type, height, bgColor, purpose, disabled, onClick }: ButtonProps) {
  const baseButtonClassName = "flex justify-center items-center";
  let AddButtonClassName = "";
  const inquiryHover = `hover:bg-gray-200 hover:font-semibold`;
  const inquiryFocus = `focus:bg-gray-200 focus:font-semibold`;

  switch (bgColor) {
    case "primary": {
      AddButtonClassName = `bg-primary text-white hover:opacity-70 focus:opacity-70`;
      break;
    }
    case "transparent": {
      AddButtonClassName = `bg-transparent text-primary border border-solid border-primary hover:opacity-70 focus:opacity-70`;
      break;
    }
    case "white": {
      AddButtonClassName = `bg-white text-primary border border-solid border-primary`;
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

  return (
    <button type={type} className={`${baseButtonClassName} label text-md w-full ${AddButtonClassName} rounded`} onClick={onClick} disabled={disabled}>{ children }</button>
  )
}

export default Button;