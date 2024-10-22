import { Link } from "react-router-dom";
import Button from "@/components/Button";
import Divide from "@/components/Divide";

function CustomService() {
  const liClassName = `flex justify-start items-center paragraph text-md text-content`;
  const mailInteractive = `hover:font-bold focus:font-bold active:font-bold`;
  
  return (
    <section className="flex flex-col justify-start items-start gap-16 w-fit flex-shrink-0">
      <h1 className="heading text-lg text-content">고객행복센터</h1>
      <div className="flex justify-start items-center" role="group">
        <a href="tel:1644-1107" className="heading text-xxl text-content mr-8">1644-1107</a>
        <span className="label text-md text-content">월~토요일 오전 7시 - 오후 6시</span>
      </div>
      <ul role="list">
        <li className="flex justify-start items-center mb-16">
          <Button purpose="inquiry">카카오톡 문의</Button>
          <div className="ml-16" role="group">
            <p className={liClassName}>월~토요일<Divide height={16} bgColor="bg-content" mx={4} />오전 7시 - 오후 6시</p>
            <p className={liClassName}>일/공휴일<Divide height={16} bgColor="bg-content" mx={4} />오전 7시 - 오후 1시</p>
          </div>
        </li>
        <li className="flex justify-start items-center mb-16">
          <Button purpose="inquiry">1:1 문의</Button>
          <div className="ml-16" role="group">
            <p className={liClassName}>365일</p>
            <p className={liClassName}>고객센터 운영시간에 순차적으로 답변드리겠습니다.</p>
          </div>
        </li>
        <li className="flex justify-start items-center">
          <Button purpose="inquiry">대량주문 문의</Button>
          <div className="ml-16" role="group">
            <p className={liClassName}>월~금요일<Divide height={16} bgColor="bg-content" mx={4} />오전 9시 - 오후 6시</p>
            <p className={liClassName}>점심시간<Divide height={16} bgColor="bg-content" mx={4} />낮 12시 - 오후 1시</p>
          </div>
        </li>
      </ul>
      <dl role="list">
        <div className="flex justify-start items-center">
          <dt className="paragraph text-sm text-content after:content-['_:']">비회원 문의</dt>
          <dd className="ml-4"><Link to="mailto:help@karlycorp.com" className={`paragraph text-sm text-primary ${mailInteractive}`}>help@karlycorp.com</Link></dd>
        </div>
        <div className="flex justify-start items-center">
          <dt className="paragraph text-sm text-content after:content-['_:']">비회원 대량주문 문의</dt>
          <dd className="ml-4"><Link to="mailto:help@karlycorp.com" className={`paragraph text-sm text-primary ${mailInteractive}`}>help@karlycorp.com</Link></dd>
        </div>
      </dl>
    </section>
  )
}

export default CustomService;