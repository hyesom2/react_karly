import Address from "@/components/cart/Address";
import Receipt from "@/components/cart/Receipt";
import Button from "@/components/Button";

function OrderSheet() {
  return (
    <section className="flex flex-col gap-16 w-280 flex-shrink-0">
      <div>
        <Address />
        <Receipt />
      </div>
      <Button type="button" bgColor="primary" height={44}>주문하기</Button>
      <ul>
        <li className="label text-sm text-gray-400">쿠폰/적립금은 주문서에서 사용 가능합니다.</li>
        <li className="label text-sm text-gray-400">[주문완료] 상태일 경우에만 주문 취소 가능합니다.</li>
        <li className="label text-sm text-gray-400">[마이컬리 &gt; 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.</li>
        <li className="label text-sm text-gray-400">쿠폰, 적립금 사용 금액을 제외한 실 결제 금액 기준으로 최종 산정됩니다.</li>
        <li className="label text-sm text-gray-400">상품별로 적립금 지급 기준이 다를 수 있습니다. (상품 상세 페이지에서 확인 가능합니다)</li>
      </ul>
    </section>
  )
}

export default OrderSheet;