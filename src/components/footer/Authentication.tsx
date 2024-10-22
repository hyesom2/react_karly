import SpriteIcons from "@/components/SpriteIcons";

function Authentication() {
  return (
    <section className="w-1050 mx-auto pt-24 pb-32">
      <h1 className="sr-only">하단 인증 정보</h1>
      <ul className="flex justify-between gap-16">
        <li className="flex justify-start items-start w-1/4">
          <SpriteIcons type="isms" />
          <div className="ml-8">
            <p className="paragraph text-10 text-content">[인증범위] 마켓칼리 쇼핑몰 서비스 개발 운영 (심사받지 않은 물리적 인프라 제외)</p>
            <p className="paragraph text-10 text-content">[유효기간] 2022.01.19 ~ 2025.01.18</p>
          </div>
        </li>
        <li className="flex justify-start items-start w-1/4">
          <SpriteIcons type="privacy" />
          <div className="ml-8">
            <p className="paragraph text-10 text-content">개인정보보호 우수 웹사이트</p>
            <p className="paragraph text-10 text-content">개인정보처리시스템 인증 (ePRIVACY PLUS)</p>
          </div>
        </li>
        <li className="flex justify-start items-start w-1/4">
          <SpriteIcons type="toss-payments" />
          <div className="ml-8">
            <p className="paragraph text-10 text-content">토스페이먼츠 구매안전(에스크로) 서비스를 이용하실 수 있습니다.</p>
          </div>
        </li>
        <li className="flex justify-start items-start w-1/4">
          <SpriteIcons type="woori-bank" />
          <div className="ml-8">
            <p className="paragraph text-10 text-content">고객님이 현금으로 결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Authentication;