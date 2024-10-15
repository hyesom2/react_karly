import Button from "@/components/Button";
import Divide from "@/components/Divide";
import SpriteIcons from '../SpriteIcons';

function Footer() {
  return (
    <footer>
      <section className="flex justify-between align-top w-1050 mx-auto">
        <article className="flex flex-col justify-start items-start gap-16 flex-shrink-0">
          <h1 className="heading text-lg">고객행복센터</h1>
          <div className="flex justify-start items-center text-content" role="group">
            <a href="tel:1644-1107" className="heading text-xxl mr-8">1644-1107</a>
            <span className="label text-md">월~토요일 오전 7시 - 오후 6시</span>
          </div>
          <ul role="list">
            <li className="flex justify-start items-center mb-16">
              <Button purpose="inquiry">카카오톡 문의</Button>
              <div className="ml-16" role="group">
                <p className="flex justify-start items-center paragraph text-md text-content">월~토요일<Divide height={16} />오전 7시 - 오후 6시</p>
                <p className="flex justify-start items-center paragraph text-md text-content">일/공휴일<Divide height={16} />오전 7시 - 오후 1시</p>
              </div>
            </li>
            <li className="flex justify-start items-center mb-16">
              <Button purpose="inquiry">1:1 문의</Button>
              <div className="ml-16" role="group">
                <p className="flex justify-start items-center paragraph text-md text-content">365일</p>
                <p className="flex justify-start items-center paragraph text-md text-content">고객센터 운영시간에 순차적으로 답변드리겠습니다.</p>
              </div>
            </li>
            <li className="flex justify-start items-center">
              <Button purpose="inquiry">대량주문 문의</Button>
              <div className="ml-16" role="group">
                <p className="flex justify-start items-center paragraph text-md text-content">월~금요일<Divide height={16} />오전 9시 - 오후 6시</p>
                <p className="flex justify-start items-center paragraph text-md text-content">점심시간<Divide height={16} />낮 12시 - 오후 1시</p>
              </div>
            </li>
          </ul>
          <dl role="list">
            <div className="flex justify-start items-center">
              <dt className="paragraph text-sm text-content after:content-['_:']">비회원 문의</dt>
              <dd className="paragraph text-sm text-primary ml-4">help@karlycorp.com</dd>
            </div>
            <div className="flex justify-start items-center">
              <dt className="paragraph text-sm text-content after:content-['_:']">비회원 대량주문 문의</dt>
              <dd className="paragraph text-sm text-primary ml-4">help@karlycorp.com</dd>
            </div>
          </dl>
        </article>
        <article className="flex flex-col justify-start items-start gap-28">
          <ul className="flex justify-between items-center gap-12">
            <li><a href="#" className="inline-flex paragraph text-md text-content whitespace-nowrap">칼리소개</a></li>
            <li><a href="#" className="inline-flex paragraph text-md text-content whitespace-nowrap">칼리소개영상</a></li>
            <li><a href="#" className="inline-flex paragraph text-md text-content whitespace-nowrap">인재채용</a></li>
            <li><a href="#" className="inline-flex paragraph text-md text-content whitespace-nowrap">이용약관</a></li>
            <li><a href="#" className="inline-flex paragraph text-md text-content whitespace-nowrap">개인정보처리방침</a></li>
            <li><a href="#" className="inline-flex paragraph text-md text-content whitespace-nowrap">이용안내</a></li>
          </ul>
          <dl className="w-auto">
            <div className="inline-flex justify-start items-center">
              <dt className="paragraph text-sm text-content after:content-['_:']">법인형 (상호)</dt>
              <dd className="paragraph text-sm text-content ml-4">주식회사 칼리</dd>
            </div>
            <Divide height={12} />
            <div className="inline-flex justify-start items-center">
              <dt className="paragraph text-sm text-content after:content-['_:']">사업자등록번호</dt>
              <dd className="paragraph text-sm text-content ml-4">261-81-23567</dd>
            </div>
            <Divide height={12} />
            <div className="inline-flex justify-start items-center">
              <dt className="paragraph text-sm text-content after:content-['_:']">통신판매업</dt>
              <dd className="paragraph text-sm text-content ml-4">제 2018-서울강남-01646 호</dd>
            </div>
            <Divide height={12} />
            <div className="inline-flex justify-start items-center">
              <dt className="paragraph text-sm text-content after:content-['_:']">개인정보보호책임자</dt>
              <dd className="paragraph text-sm text-content ml-4">이원준</dd>
            </div>
            <Divide height={12} />
            <div className="inline-flex justify-start items-center">
              <dt className="paragraph text-sm text-content after:content-['_:']">주소</dt>
              <dd className="paragraph text-sm text-content ml-4">서울특별시 강남구 테헤란로 133, 18층(역삼동)</dd>
            </div>
            <Divide height={12} />
            <div className="inline-flex justify-start items-center">
              <dt className="paragraph text-sm text-content after:content-['_:']">대표이사</dt>
              <dd className="paragraph text-sm text-content ml-4">김슬아</dd>
            </div>
            <Divide height={12} />
            <div className="inline-flex justify-start items-center">
              <dt className="paragraph text-sm text-content after:content-['_:']">입점문의</dt>
              <dd className="paragraph text-sm text-content ml-4">입정문의하기</dd>
            </div>
            <Divide height={12} />
            <div className="inline-flex justify-start items-center">
              <dt className="paragraph text-sm text-content after:content-['_:']">제휴문의</dt>
              <dd className="paragraph text-sm text-content ml-4">business@karlycorp.com</dd>
            </div>
            <Divide height={12} />
            <div className="inline-flex justify-start items-center">
              <dt className="paragraph text-sm text-content after:content-['_:']">채용문의</dt>
              <dd className="paragraph text-sm text-content ml-4">recruit@karlycorp.com</dd>
            </div>
            <Divide height={12} />
            <div className="inline-flex justify-start items-center">
              <dt className="paragraph text-sm text-content after:content-['_:']">팩스</dt>
              <dd className="paragraph text-sm text-content ml-4">070 - 7500 - 6098</dd>
            </div>
          </dl>
          <ul className="flex justify-start items-center">
            <li className="mr-20"><SpriteIcons type="blog" /></li>
            <li className="mr-20"><SpriteIcons type="facebook" /></li>
            <li className="mr-20"><SpriteIcons type="instagram" /></li>
            <li className="mr-20"><SpriteIcons type="naver-post" /></li>
            <li><SpriteIcons type="youtube" /></li>
          </ul>
        </article>
      </section>
      <section className="w-1050 mx-auto pt-24 pb-32">
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
      <section className="text-center text-gray-400 bg-gray-50 pt-20 pb-32">
        <h1 className="sr-only">저작권</h1>
        <p className="paragraph text-10 mb-8">
          마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다. <br />
          마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
        </p>
        <span className="paragraph text-10">&copy; KARLY CORP. ALL RIGHTS RESERVED</span>
      </section>
    </footer>
  )
}

export default Footer;