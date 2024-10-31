import Button from "@/components/Button";
import Badge from "@/components/Badge";
import List from "@/components/List";

function ProductReview() {
  return (
    <section className="flex flex-col gap-56">
      <header className="relative flex flex-col justify-start items-start gap-24">
        <h2 className="heading text-xl text-black">상품후기</h2>
        <div>
          <strong className="label text-md text-content">글후기 50원 적립금 혜택이 있어요.</strong>
          <ul>
            <li className="label text-sm text-gray-500 before:content-['·'] before:mx-4">퍼플, 더퍼플은 2배 적립 (100원) / 주간 베스트 후기로 선정 시 5,000원 추가 적립</li>
            <li className="label text-sm text-gray-500 before:content-['·'] before:mx-4">후기 작성은 배송완료일로부터 30일 이내 가능합니다.</li>
            <li className="label text-sm text-gray-500 before:content-['·'] before:mx-4">작성하신 후기는 확인 후 적립금이 지급됩니다. (영업일 기준 평균 1~2일 소요)</li>
          </ul>
        </div>
        <Button type="button" bgColor="primary" width={155} height={44} className="absolute top-0 right-0">후기 작성하기</Button>
      </header>
      <div className="flex flex-col gap-16">
        <div className="flex justify-between items-center">
          <span className="flex label text-sm text-content">총<span className="label text-sm text-content ml-2">2</span>개</span>
          <List type="product" />
        </div>
        <section>
          <ul className="border-t border-solid border-black">
            <li className="flex flex-col" tabIndex={0}>
              <div className="flex justify-start items-center gap-20 p-20 border-b border-solid border-gray-100">
                <Badge purpose="notice">공지</Badge>
                <button type="button" className="label text-md text-content">금주의 베스트 후기 안내</button>
              </div>
              <p className="label text-sm text-content p-20 whitespace-pre-line border-b border-solid border-gray-100 hidden">
                {`안녕하세요.
                
                컬리는 상품에 대한 고객 여러분의 생생한 의견을 듣고 더 나은 상품을 준비하기 위해 상품 후기 게시판을 운영하고 있습니다.
                또한 고객님들의 다양한 후기를 통해 상품을 구매하시는 데 도움이 되실 수 있도록 베스트 후기를 선정하고 있어요!
                
                그럼 7월 2주 차 베스트 후기 선정 결과를 알려드릴게요!
                
                [7월 2주 베스트 후기 선정 결과 ]
                
                ■ 베스트 후기: 총 96건 선정
                ■ 베스트 상품: 총 85개 선정
                
                ▶ 선정된 베스트 후기가 궁금하신가요? ✍️(◔◡◔)
                베스트 후기 Top5 상품을 공유해 드리니 상품 검색 후 작성된 후기를 만나보세요.
                
                1. [일일특가][포렌] 여름이불, 쿨링패드, 쿨다운 경추베개 8종 (택1) (6. 더험블 여름이불 K)
                2. [쁘띠첼] 미초 파인애플 900ml
                3. [추억의국민학교떡볶이] 국떡 매운맛
                4. [네스프레소] 버츄오 팝 팬톤 에디션
                5. [Picard] 로즈마리 시즈닝 포테이토 (감자튀김)
                
                정성껏 후기를 작성해 주신 모든 고객님께 감사드립니다.
                Better Life for All. Kurly
                
                =====================================================================================
                ▶ 베스트 후기는 어떻게 선정될까요?
                └ 매주 수요일 지난주 월-일요일까지 작성해 주신 후기를 대상으로 선정하고 있어요!
                └ 상품에 좋았던 점, 아쉬웠던 점등 다른 고객님들이 구매에 참고할 수 있는 다양한 의견을 3장 이상에 사진과 함께 300자 이상 후기를 남겨주시면 후보가 되실 수 있어요!
                
                ※ 참여 및 중복 선정 제한등은 없습니다.
                
                → 베스트후기 선정된 고객님들께는 컬리 적립금 5,000원이 지급됩니다.
                =====================================================================================
                `}
              </p>
            </li>
            <li className="flex flex-col" tabIndex={0}>
              <div className="flex justify-start items-center gap-20 p-20 border-b border-solid border-gray-100">
                <Badge purpose="notice">공지</Badge>
                <button type="button" className="label text-md text-content">상품 후기 적립금 정책 안내</button>
              </div>
              <p className="label text-sm text-content p-20 whitespace-pre-line border-b border-solid border-gray-100 hidden">
                {`안녕하세요. 컬리 입니다.
                2024년 상품후기 적립금 지급 정책 안내해 드리니 후기 작성에 참고 부탁드립니다.
                ▶상품후기 적립 안내◀
                1. 상품후기 작성은 배송완료일로부터 30일 이내 작성이 가능합니다.
                2. 동일 상품(동일 옵션)의 후기는 작성일 기준으로 월 1회만 적립금이 지급됩니다.
                └ 옵션 상품은 1개 이상의 종류를 가진 상품일 때, 각 상품을 의미합니다.
                └ 월의 기준은 작성한 달의 1일 ~ 말일입니다.
                예시) 곰탕 2종 상품(맑은 곰탕, 진한 곰탕) : 각각 구매 후 후기 작성 시 2건 모두 적립금 지급, 일자만 다르게 동일한 진한 곰탕을 구매 후 후기 작성 시 1건만 적립금 지급
                3. 작성하신 후기는 일주일 이내에 적립금이 지급됩니다.
                4. 작성 당일의 후기를 기준으로 적립금이 지급됩니다. (이후 수정 시 적립금 지급액에 영향을 주지 않습니다.)
                예시) 10/10 글 후기 작성 후 10/10 사진 후기 수정 시 100원 지급, 10/10 글 후기 작성 후 10/11 사진 후기 작성 시 50원 지급
                5. 비공개 후기는 적립금이 지급되지 않습니다.

                ▶적립금 지급 정책 ◀

                1. 사진 후기 100원, 글 후기 50원 적립
                2. 주간 베스트 후기로 선정 시 5,000원 추가 적립
                └ 선정 건수 : 일주일 최대 100건
                └ 혜택 : 선정 시 적립금 5,000원
                └ 지급 일시 : 매주 수요일 (지급일이 공휴일의 경우 전 영업일)
                *Best 후기 당첨 상품은 후기 게시판 '금주의 베스트 후기 안내'에서 확인하실 수 있습니다.

                ※ 유의 사항 ※

                컬리는 믿을 수 있는 후기문화를 함께 만들어 가고자 합니다. 따라서 후기 내용이 아래에 해당하는 경우에는 검토 후 삭제 및 적립금 회수 조치될 수 있습니다

                1) 욕설, 폭력성, 음란성, 상업성 등 업체나 타인에게 불쾌한 내용을 작성한 경우
                2) 구매한 상품과 무관한 내용이나 동일 문자/단순 초성의 반복 등 부적합한 내용을 작성한 경우
                3) 상품의 기능이나 효과 등에 오해의 소지가 있는 내용을 작성한 경우
                4) 저작권, 초상권 등 타인의 권리를 침해하는 이미지, 동영상을 사용한 경우
                5) 구매한 상품이 아닌 캡처 사진, 포장 상자 사진 등 상품과 관련 없는 이미지, 동영상을 사용한 경우

                또한, 비정상적인 방법을 통해 후기를 작성하고 적립금을 취득한 경우 작성자에 법적 책임의 소지가 있음을 알려드립니다.`}
              </p>
            </li>
          </ul>
          <ul>
            {/* ========== 상품후기_1. 후기가 없을 경우 ========== */}
            <li className="flex flex-col justify-center items-center p-20 bg-white border-b border-solid border-gray-100">
              <span className="icon icon-notice text-45 text-gray-100"></span>
              <p className="label text-lg text-gray-400">따끈한 첫 후기를 기다리고있어요.</p>
            </li>
            {/* ========== 상품후기_2. 후기가 있을 경우 ========== */}
            {/* <li className="flex justify-start items-start gap-82 p-20 bg-white border-b border-solid border-gray-100">
              <div className="flex items-center gap-8">
                <Badge purpose="best">베스트</Badge>
                <Badge purpose="level">퍼플</Badge>
                <span className="label text-sm text-black">김*진</span>
              </div>
              <div className="flex flex-col gap-20">
                <h3 className="label text-sm text-gray-400">[풀무원] 탱탱쫄면 (4개입)</h3>
                <p className="paragraph text-sm text-black whitespace-pre-line">
                  {`너무 맛있어여~ 
                  면이 쫄깃하고 양념도 짱맛나요!!`}
                </p>
                <time className="label text-sm text-gray-400" dateTime="2024.10.28">2024.10.28</time>
              </div>
            </li>
            <li className="flex justify-start items-start gap-82 p-20 border-b border-solid border-gray-100">
              <div className="flex items-center gap-8">
                <Badge purpose="best">베스트</Badge>
                <Badge purpose="level">퍼플</Badge>
                <span className="label text-sm text-black">김*식</span>
              </div>
              <div className="flex flex-col gap-20">
                <h3 className="label text-sm text-gray-400">[풀무원] 탱탱쫄면 (4개입)</h3>
                <p className="paragraph text-sm text-black whitespace-pre-line">
                  {`또 주문할것 같습니다. 
                  너무 맛있어요 내스타일이야~!`}
                </p>
                <time className="label text-sm text-gray-400" dateTime="2024.10.29">2024.10.29</time>
              </div>
            </li>
            <li className="flex justify-start items-start gap-82 p-20 border-b border-solid border-gray-100">
              <div className="flex items-center gap-8">
                <Badge purpose="best">베스트</Badge>
                <Badge purpose="level">퍼플</Badge>
                <span className="label text-sm text-black">김*범</span>
              </div>
              <div className="flex flex-col gap-20">
                <h3 className="label text-sm text-gray-400">[풀무원] 탱탱쫄면 (4개입)</h3>
                <p className="paragraph text-sm text-black whitespace-pre-line">
                  {`맛있긴한데 양념이 좀 아쉬워요.`}
                </p>
                <time className="label text-sm text-gray-400" dateTime="2024.10.30">2024.10.30</time>
              </div>
            </li> */}
          </ul>
        </section>
        <nav className="flex justify-center items-center gap-16">
          <Button type="button" purpose="nav">
            <span className="icon icon-arrow_left text-36 text-gray-100"></span>
          </Button>
          <Button type="button" purpose="nav">
            <span className="icon icon-arrow_right text-36 text-primary"></span>
          </Button>
        </nav>
      </div>
    </section>
  )
}

export default ProductReview;