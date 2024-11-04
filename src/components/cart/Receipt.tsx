import Badge from "@/components/Badge";

function Receipt() {
  return (
    <section className="flex flex-col gap-24 bg-gray-50 p-20 border border-solid border-gray-100">
      <dl className="flex flex-col gap-16 pb-24 border-b border-dotted border-gray-100">
        <div className="flex justify-between items-center">
          <dt className="paragraph text-md text-content">상품금액</dt>
          <dd className="paragraph text-md text-content">40,860<strong className="label text-md text-content">원</strong></dd>
        </div>
        <div className="flex justify-between items-center">
          <dt className="paragraph text-md text-content">상품할인금액</dt>
          <dd className="paragraph text-md text-content">-4,651<strong className="label text-md text-content">원</strong></dd>
        </div>
        <div className="flex justify-between items-center">
          <dt className="paragraph text-md text-content">배송비</dt>
          <dd className="paragraph text-md text-content">+3,000<strong className="label text-md text-content">원</strong></dd>
        </div>
      </dl>
      <dl className="flex flex-col gap-12">
        <div className="flex justify-between items-center">
          <dt className="paragraph text-md text-content">결제예정금액</dt>
          <dd className="heading text-xl text-black">40,680<strong className="label text-md text-black">원</strong></dd>
        </div>
        <div className="flex justify-end items-center gap-8">
          <dt><Badge purpose="earn">적립</Badge></dt>
          <dd className="label text-sm text-content">최대 36원 적립 일반 0.1%</dd>
        </div>
      </dl>
    </section>
  )
}

export default Receipt;