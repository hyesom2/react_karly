import ProductInfo from "@/components/productDetail/ProductInfo";
import ProductReview from "@/components/productDetail/ProductReview";
import ProductInquiry from "@/components/productDetail/ProductInquiry";
import Button from "@/components/Button";
import Badge from "@/components/Badge";

function ProductDetail() { 
  return (
    <section className="w-1050 mx-auto pt-40 pb-96">
      <h1 className="sr-only">상품정보</h1>
      <div className="flex items-start gap-90">
        <figure className="flex-shrink-0">
          <img src="/product01.png" alt="product01" />
          <figcaption className="sr-only">product01</figcaption>
        </figure>
        <div className="flex flex-col gap-20">
          <header>
            <div className="flex flex-col gap-16">
              <span className="label text-lg text-gray-500">샛별배송</span>
              <div className="flex flex-col gap-4">
                <h2 className="heading text-xl text-content">[풀무원] 탱탱쫄면 (4개입)</h2>
                <span className="paragraph text-md text-gray-400">튀기지 않아 부담 없는 매콤함</span>
              </div>
              <div className="flex items-center gap-4">
                <strong className="label text-xl text-content">4,980</strong><span className="heading text-md text-content">원</span>
              </div>
              <span className="label text-md text-primary">로그인 후, 적립 혜택이 제공됩니다.</span>
            </div>
          </header>
          <dl className="border-t border-solid border-gray-100">
            <div className="flex py-16 border-b border-solid border-gray-100">
              <dt className="label text-sm text-gray-500 w-128">배송</dt>
              <dd>
                <span className="label text-sm text-gray-500">샛별배송</span>
                <span className="label text-sm text-gray-400">23시 전 주문 시 내일 아침 7시 전 도착<br /> (대구 부산 울산 샛별배송 운영시;간 별도 확인)</span>
              </dd>
            </div>
            <div className="flex py-16 border-b border-solid border-gray-100">
              <dt className="flex label text-sm text-gray-500 w-128">판매자</dt>
              <dd className="label text-sm text-gray-500">칼리</dd>
            </div>
            <div className="flex py-16 border-b border-solid border-gray-100">
              <dt className="label text-sm text-gray-500 w-128">포장타입</dt>
              <dd className="label text-sm text-gray-500">상온 (종이포장)</dd>
              <dd className="label text-sm text-gray-400">택배배송은 에코 포장이 스티로폼으로 대체됩니다.</dd>
            </div>
            <div className="flex py-16 border-b border-solid border-gray-100">
              <dt className="label text-sm text-gray-500 w-128">판매단위</dt>
              <dd className="label text-sm text-gray-500">1봉</dd>
            </div>
            <div className="flex py-16 border-b border-solid border-gray-100">
              <dt className="label text-sm text-gray-500 w-128">중량/용량</dt>
              <dd className="label text-sm text-gray-500">123g*4봉</dd>
            </div>
            <div className="flex py-16 border-b border-solid border-gray-100">
              <dt className="label text-sm text-gray-500 w-128">원산지</dt>
              <dd className="label text-sm text-gray-500">상세페이지 별도표기</dd>
            </div>
            <div className="flex py-16 border-b border-solid border-gray-100">
              <dt className="flex label text-sm text-gray-500 w-128 flex-shrink-0">알레르기정보</dt>
              <dd className="label text-sm text-gray-400">
                -대두, 밀, 쇠고기 함유<br />
                -계란, 우유, 메밀, 땅콩, 고등어, 게, 돼지고기, 새우, 복숭아, 토마토, 아황산류, 호두, 잣, 닭고기, 오징어, 조개류(굴, 전복, 홍합 포함)를 사용한 제품과 같은 제조시설에서 제조
              </dd>
            </div>
            <div className="flex py-16 border-b border-solid border-gray-100">
              <dt className="label text-sm text-gray-500 w-128">상품선택</dt>
              <dd className="relative flex flex-col gap-12 border border-solid border-gray-100 p-12 w-full">
                <h3 className="label text-sm text-gray-500">[풀무원] 탱탱쫄면 (4개입)</h3>
                <Button purpose="count" width={84} />
                <span className="absolute right-12 bottom-12 label text-sm text-content">4,980원</span>
              </dd>
            </div>
            <div className="flex flex-col items-end py-28">
              <dl className="flex items-center gap-16">
                <dt className="label text-md text-black">총 상품금액:</dt>
                <dd><strong className="label text-xl text-content">4,980</strong><span className="heading text-md text-content">원</span></dd>
              </dl>
              <div className="flex items-center gap-6">
                <Badge purpose="earn">적립</Badge>
                <span className="label text-md text-black">로그인 후, 적립 혜택 제공</span>
              </div>
            </div>
            <div className="flex gap-12">
              <button type="button" className="flex justify-center items-center w-56 h-56 border border-solid border-gray-100 rounded flex-shrink-0">
                <span className="icon icon-heart text-36 text-content"></span>
              </button>
              <button type="button" className="flex justify-center items-center w-56 h-56 border border-solid border-gray-100 rounded flex-shrink-0">
                <span className="icon icon-bell text-36 text-content"></span>
              </button>
              <Button type="button" height={54} bgColor="primary">장바구니 담기</Button>
            </div>
          </dl>
        </div>
      </div>
      <ul className="flex h-54 mt-48" role="tablist">
        <li className="flex justify-center items-center w-1/4 border border-solid border-gray-100 bg-gray-white">
          <button type="button" className="label text-md text-primary w-full h-full" role="tab" aria-selected="true">상품설명</button></li>
        <li className="flex justify-center items-center w-1/4 border border-solid border-gray-300">
          <button type="button" className="label text-md text-content bg-gray-50 w-full h-full" role="tab" aria-selected="false">상세정보</button></li>
        <li className="flex justify-center items-center w-1/4 border border-solid border-gray-300">
          <button type="button" className="flex justify-center items-center bg-gray-50 w-full h-full gap-8" role="tab" aria-selected="false"><span className="label text-md text-content">후기</span><span className="paragraph text-sm text-content">(1,000)</span></button></li>
        <li className="flex justify-center items-center w-1/4 border border-solid border-gray-300">
          <button type="button" className="label text-md text-content bg-gray-50 w-full h-full" role="tab" aria-selected="false">문의</button></li>
      </ul>
      <div className="pt-40 py-52">
        <ProductInfo />
      </div>
      <div className="flex flex-col gap-70">
        {/* ========== 상품후기 ========== */}
        <ProductReview />

        {/* ========== 상품문의 ========== */}
        <ProductInquiry />
      </div>
    </section>
  )
}

export default ProductDetail;