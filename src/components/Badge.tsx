import { ReactNode } from 'react';

interface BadgeProps {
  purpose: string;
  children: ReactNode;
}

function Badge({ children, purpose }: BadgeProps) {
  let AddClassName = "";

  switch (purpose) {
    case "best" : {
      AddClassName += "text-white bg-secondary";
      break;
    }
    case "notice" : {
      AddClassName += "text-content bg-gray-100";
      break;
    }
    case "level": {
      AddClassName += "text-primary bg-transparent border border-primary";
      break;
    }
  }
  return (
    <>
      <span className={ `inline-flex justify-center items-center text-sm label px-8 h-18 rounded-1 ${AddClassName}` }>
        { children }
      </span>
    </>
  )
}

export default Badge;