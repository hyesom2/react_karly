interface DivideProps {
  height: number;
  bgColor?: string;
  mx?: number;
}

function Divide({ height, bgColor, mx }: DivideProps) {
  const divideClassName = `inline-block w-1 my-0 ${bgColor}`;
  
  return (
    <span className={divideClassName} style={{ height: `${height}rem`, margin: `0 ${mx}rem` }} aria-hidden="true"></span>
  )
}

export default Divide;