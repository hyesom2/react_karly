import Button from "@/components/Button";

interface ToolTipProps {
  id?: string;
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function ToolTip({ className, id, onMouseEnter, onMouseLeave }: ToolTipProps) {
  return (
    <div
      id={id}
      className={`${className} flex flex-col gap-12 border border-solid border-gray-200 bg-white p-20 tooltip`}
      role="tooltip"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p className="label text-md text-content">
        <strong className="paragraph text-md text-primary">배송지를 등록</strong>하고<br />
        구매 가능한 상품을 확인하세요!
      </p>
      <div role="group" className="flex flex-row gap-8">
        <Button bgColor="transparent" width={80} height={36}>로그인</Button>
        <Button bgColor="primary" height={36}>
          <span className="icon icon-search"></span>
          주소 검색
        </Button>
      </div>
    </div>
  )
}

export default ToolTip;