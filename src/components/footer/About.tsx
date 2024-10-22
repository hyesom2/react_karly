import { Link } from "react-router-dom";
import SpriteIcons from "@/components/SpriteIcons";
import Divide from "@/components/Divide";

function About() {
  const listClassName = `inline-flex paragraph text-md text-content whitespace-nowrap hover:font-bold active:font-bold focus:font-bold`;
  const contactInteractive = `paragraph text-sm text-primary hover:font-bold active:font-bold focus:font-bold`;
  
  return (
    <section className="flex flex-col justify-start items-start gap-28">
      <ul className="flex items-center gap-12">
        <li><Link to="#" className={listClassName}>칼리소개</Link></li>
        <li><Link to="#" className={listClassName}>칼리소개영상</Link></li>
        <li><Link to="#" className={listClassName}>인재채용</Link></li>
        <li><Link to="#" className={listClassName}>이용약관</Link></li>
        <li><Link to="#" className={listClassName}>개인정보처리방침</Link></li>
        <li><Link to="#" className={listClassName}>이용안내</Link></li>
      </ul>
      <dl className="pr-70">
        <div className="inline-flex justify-start items-center">
          <dt className="paragraph text-sm text-content after:content-['_:']">법인형 (상호)</dt>
          <dd className="paragraph text-sm text-content ml-4">주식회사 칼리</dd>
        </div>
        <Divide height={10} bgColor="bg-content" mx={8} />
        <div className="inline-flex justify-start items-center">
          <dt className="paragraph text-sm text-content after:content-['_:']">사업자등록번호</dt>
          <dd className="ml-4"><Link to="tel:261-81-23567" className="paragraph text-sm text-content">261-81-23567</Link></dd>
        </div>
        <Divide height={10} bgColor="bg-content" mx={8} />
        <div className="inline-flex justify-start items-center">
          <dt className="paragraph text-sm text-content after:content-['_:']">통신판매업</dt>
          <dd className="paragraph text-sm text-content ml-4">제 2018-서울강남-01646 호</dd>
        </div>
        <Divide height={10} bgColor="bg-content" mx={8} />
        <div className="inline-flex justify-start items-center">
          <dt className="paragraph text-sm text-content after:content-['_:']">개인정보보호책임자</dt>
          <dd className="paragraph text-sm text-content ml-4">이원준</dd>
        </div>
        <Divide height={10} bgColor="bg-content" mx={8} />
        <div className="inline-flex justify-start items-center">
          <dt className="paragraph text-sm text-content after:content-['_:']">주소</dt>
          <dd className="paragraph text-sm text-content ml-4">서울특별시 강남구 테헤란로 133, 18층(역삼동)</dd>
        </div>
        <Divide height={10} bgColor="bg-content" mx={8} />
        <div className="inline-flex justify-start items-center">
          <dt className="paragraph text-sm text-content after:content-['_:']">대표이사</dt>
          <dd className="paragraph text-sm text-content ml-4">김슬아</dd>
        </div>
        <Divide height={10} bgColor="bg-content" mx={8} />
        <div className="inline-flex justify-start items-center">
          <dt className="paragraph text-sm text-content after:content-['_:']">입점문의</dt>
          <dd className="paragraph text-sm text-content ml-4">입정문의하기</dd>
        </div>
        <Divide height={10} bgColor="bg-content" mx={8} />
        <div className="inline-flex justify-start items-center">
          <dt className="paragraph text-sm text-content after:content-['_:']">제휴문의</dt>
          <dd className="ml-4"><Link to="mailto:business@karlycorp.com" className={`${contactInteractive}`}>business@karlycorp.com</Link></dd>
        </div>
        <Divide height={10} bgColor="bg-content" mx={8} />
        <div className="inline-flex justify-start items-center">
          <dt className="paragraph text-sm text-content after:content-['_:']">채용문의</dt>
          <dd className="ml-4"><Link to="mailto:recruit@karlycorp.com" className={`${contactInteractive}`}>recruit@karlycorp.com</Link></dd>
        </div>
        <Divide height={10} bgColor="bg-content" mx={8} />
        <div className="inline-flex justify-start items-center">
          <dt className="paragraph text-sm text-content after:content-['_:']">팩스</dt>
          <dd className="ml-4"><Link to="tel:070-7500-6098" className={`${contactInteractive}`}>070 - 7500 - 6098</Link></dd>
        </div>
      </dl>
      <ul className="flex justify-start items-center">
        <li className="mr-20"><SpriteIcons type="blog" /></li>
        <li className="mr-20"><SpriteIcons type="facebook" /></li>
        <li className="mr-20"><SpriteIcons type="instagram" /></li>
        <li className="mr-20"><SpriteIcons type="naver-post" /></li>
        <li><SpriteIcons type="youtube" /></li>
      </ul>
    </section>
  )
}

export default About;