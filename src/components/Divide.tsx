interface DivideProps {
  height: number;
}

function Divide({ height }: DivideProps) {
  let divideClassName = "inline-block w-1 bg-content my-0";
  switch(height) {
    case 12: {
      divideClassName += " h-12 mx-8";
      break;
    }
    case 16: {
      divideClassName += " h-16 mx-4";
      break;
    }
  }

  return (
    <span className={divideClassName} aria-hidden="true"></span>
  )
}

export default Divide;