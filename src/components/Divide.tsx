interface DivideProps {
  height: number;
  bgColor?: string;
}

function Divide({ height, bgColor }: DivideProps) {
  let divideClassName = "inline-block w-1 my-0";
  switch(height) {
    case 12: {
      divideClassName += ` h-12 mx-8 ${bgColor}`;
      break;
    }
    case 14: {
      divideClassName += ` h-14 mx-12 ${bgColor}`;
      break;
    }
    case 16: {
      divideClassName += ` h-16 mx-4 ${bgColor}`;
      break;
    }
  }

  return (
    <span className={divideClassName} aria-hidden="true"></span>
  )
}

export default Divide;