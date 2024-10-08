import { useId } from 'react';

interface InputProps {
  srOnly?: boolean;
  iconHide?: boolean;
  type?: "text" | "search" | "email" | "password" | "radio" | "number" | "file" | "time" | "checked",
  placeholder?: string;
  width?: number;
  height?: number;
}

function Input({ srOnly, iconHide, type, placeholder, width, height }: InputProps) {
  const inputId = useId();
  let labelClassName = "label text-md text-content";
  let inputClassName = "";
  let iconClassName = "";

  if (srOnly) {
    labelClassName += " sr-only";
  }
  if (iconHide) {
    iconClassName += "hidden";
  }

  switch (type) {
    case "search": {
      inputClassName = `paragraph text-lg w-full h-full bg-white border border-solid border-primary pl-20 pr-56 rounded`;
      break;
    }
    // text, email, password 
    default: {
      inputClassName = `paragraph text-md w-full h-full border border-solid border-gray-300 placeholder-gray-400 px-20 rounded`;
      break;
    }
  }
  
  return (
    <form className="relative" style={{ width: `${width}rem` }}>
      <label htmlFor={inputId} className={labelClassName}>아이디<span className="icon icon-point label text-sm text-error" aria-label="hidden"></span></label>
      <input
        id={inputId}
        className={inputClassName}
        style={{ height: `${height}rem`} }
        type={type}
        placeholder={placeholder}
      />
      <button type="submit" className={`absolute top-1/2 -translate-y-1/2 right-20 w-36 h-36 ${iconClassName}`}>
        <span className="icon icon-search text-primary text-36" aria-hidden="true"></span>
      </button>
    </form>
  )
}

export default Input;