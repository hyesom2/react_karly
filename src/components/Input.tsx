import { useId } from 'react';

interface InputProps {
  labelText?: string;
  labelHide?: boolean;
  iconHide?: boolean;
  type?: "text" | "search" | "email" | "password" | "radio" | "number" | "file" | "time" | "checkbox",
  placeholder?: string;
  width?: number;
  height?: number;
  hintText?: string;
  hintTextHide?: boolean;
  name?: string;
  min?: number;
  max?: number;
  value?: string | undefined;
  accept?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

function Input({
  labelHide = false,
  labelText,
  iconHide = false,
  type = "text",
  placeholder,
  width,
  height,
  hintText,
  hintTextHide = false,
  name,
  min,
  max,
  value,
  accept,
  checked,
  onChange,
  onKeyDown,
  disabled
  }: InputProps) {
  const inputId = useId();
  const labelClassName = labelHide ? "sr-only" : "label text-md text-content";
  const iconHideClassName = iconHide ? "hidden" : "";
  const hintTextClassName = hintTextHide ? "hidden" : "paragraph text-sm text-error";
  let inputClassName = "paragraph w-full h-full border border-solid placeholder-gray-400 rounded hover:border-2 focus:border-2 active:border-2 flex-shrink-0";

  switch (type) {
    case "search": {
      inputClassName += " text-lg bg-white border-primary pl-20 pr-56";
      break;
    }
    // text, email, password 
    default: {
      inputClassName += " text-md border-gray-300 px-20";
      break;
    }
  }
  
  return (
    <>
      <label htmlFor={inputId} className={labelClassName}>{labelText}<span className={`${iconHideClassName} icon icon-point label text-sm text-error`} aria-label="hidden"></span></label>
      <input
        id={inputId}
        className={inputClassName}
        style={{ width:`${width}rem`, height: `${height}rem`} }
        type={type}
        placeholder={placeholder}
        name={name}
        minLength={min}
        maxLength={max}
        value={value}
        accept={accept}
        checked={checked}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
      />
      <span className={hintTextClassName}>{hintText}</span>
      {
        type === "search"
          ?
          <button type="submit" className={`${iconHideClassName} inline-block ml-2 absolute top-1/2 -translate-y-1/2 right-20 w-36 h-36`} aria-label="검색">
          <span className="icon icon-search text-primary text-36" aria-hidden="true"></span>
        </button>
          :
        null
      }
    </>
  )
}

export default Input;