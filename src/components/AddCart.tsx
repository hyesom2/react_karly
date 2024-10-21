// > components
import Badge from "@/components/Badge";
import Button from "@/components/Button";

function AddCart() {
  return (
    <div className="flex flex-col gap-28 w-400 px-20 py-24 bg-white border border-solid rounded-16 shadow-bottom-middle">
      <header>
        <h2 className="label text-md mb-12">[풀무원] 탱탱쫄면 (4개입)</h2>
        <dl className="flex justify-between items-center">
          <dt className="label text-md">4,980원</dt>
          <dd className="label text-md">1</dd>
        </dl>
      </header>
      <dl className="flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <dt className="label text-md">합계</dt>
          <dd className="heading text-xl">4,980원</dd>
        </div>
        <div className="flex justify-end items-center gap-12">
          <dt><Badge purpose="earn">적립</Badge></dt>
          <dd><span className="label text-md">구매 시 5원 적립</span></dd>
        </div>
      </dl>
      <div className="flex flex-between items-center gap-8 w-full" role="group">
        <Button type="button" height={54} bgColor="white">취소</Button>
        <Button type="button" height={54} bgColor="primary">장바구니 담기</Button>
      </div>
    </div>
  )
}

export default AddCart;