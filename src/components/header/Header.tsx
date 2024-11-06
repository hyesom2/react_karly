import menuStore from '@/stores/components/Header/menuStore';
import { Link } from 'react-router-dom';
import TopBanner from "@/components/header/TopBanner";
import List from "@/components/List";
import Menu from "@/components/Menu";
import Input from "@/components/Input";
import SpriteIcons from "@/components/SpriteIcons";
import Divide from "@/components/Divide";
import ToolTip from "@/components/ToolTip";

function Header() {
  const { show, setShow, hover, tooltipShow, setTooltipShow } = menuStore();

  return (
    <header className="flex flex-col w-full mx-auto bg-white shadow-bottom-low">
        <TopBanner />
        <List type="header">
          <ul className={`invisible peer-hover:visible absolute top-full right-0 z-50 overflow-hidden w-128 ${hover ? "h-90 border border-solid border-gray-100 bg-white": "h-0"} py-4 transition-all duration-300`}>
            <li className=" px-8 hover:bg-gray-50"><Link to="/" className="inline-block paragraph text-sm text-content w-full hover:font-bold focus:bg-gray-50">공지사항</Link></li>
            <li className=" px-8 hover:bg-gray-50"><Link to="/" className="inline-block paragraph text-sm text-content w-full hover:font-bold focus:bg-gray-50">자주하는 질문</Link></li>
            <li className=" px-8 hover:bg-gray-50"><Link to="/" className="inline-block paragraph text-sm text-content w-full hover:font-bold focus:bg-gray-50">1:1 문의</Link></li>
            <li className=" px-8 hover:bg-gray-50"><Link to="/" className="inline-block paragraph text-sm text-content w-full hover:font-bold focus:bg-gray-50">대량주문 문의  </Link></li>
          </ul>
        </List>
        <div className="relative flex justify-between items-center w-1050 mx-auto h-42 mb-20">
          <div className="flex">
            <SpriteIcons type="logo"/>
            <ul className="flex items-center ml-12">
              <li><Link to="/" className="label text-lg text-primary hover:text-primary">마켓칼리</Link></li>
              <Divide height={14} bgColor="bg-border" mx={12} />
              <li><Link to="/" className="label text-lg text-gray-400 hover:text-primary">뷰티칼리</Link></li>
            </ul>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 -translate-Y-1/2">
            <Input type="search" labelHide={true} width={400} height={60} placeholder="검색어를 입력해주세요." />
          </div>
          <ul className="flex items-center gap-20 flex-shrink-0">
            <li className="relative group">
              <button onMouseEnter={() => setTooltipShow(true)} onMouseLeave={() => setTooltipShow(false)} className="focus:border focus:border-solid focus:border-black" aria-describedby="tooltip">
                <span className="icon icon-location text-36 text-content hover:text-primary"></span>
              </button>
            </li>
            <li>
              <Link to="/" className="inline-block"><span className="icon icon-heart text-36 text-content hover:text-primary"></span></Link>
            </li>
            <li>
              <Link to="/cart" className="inline-block"><span className="icon icon-cart text-36 text-content hover:text-primary"></span></Link>
            </li>
          </ul>
          {
            tooltipShow && (
            <ToolTip
              onMouseEnter={() => setTooltipShow(true)}
              onMouseLeave={() => setTooltipShow(false)}
              id="tooltip"
            />)
          }
        </div>
        <ul className="flex justify-between items-center w-1050 mx-auto">
          <li className="relative" onMouseEnter={setShow} onMouseLeave={setShow}>
            <button className="flex justify-center items-center hover:text-primary" onFocus={setShow} onBlur={setShow}>
              <span className="icon icon-menu label text-lg mr-12"></span>
              <span className="label text-md text-content hover:text-primary">카테고리</span>
            </button>
            <Menu className={`${show ? "visible" : "invisible"}`} />
          </li>
          <ul className="flex justify-center items-center my-16">
            <li className="w-150 h-40">
              <Link to="/" className="inline-flex justify-center items-center w-full h-full label text-md text-content hover:text-primary hover:underline hover:underline-offset-2">신상품</Link>
            </li>
            <li className="w-150 h-40">
              <Link to="/" className="inline-flex justify-center items-center w-full h-full label text-md text-content hover:text-primary hover:underline hover:underline-offset-2">베스트</Link>
            </li>
            <li className="w-150 h-40">
              <Link to="/" className="inline-flex justify-center items-center w-full h-full label text-md text-content hover:text-primary hover:underline hover:underline-offset-2">알뜰쇼핑</Link>
            </li>
            <li className="w-150 h-40">
              <Link to="/" className="inline-flex justify-center items-center w-full h-full label text-md text-content hover:text-primary hover:underline hover:underline-offset-2">특가/혜택</Link>
            </li>
          </ul>
          <li className="inline-block border border-solid border-gray-300 rounded-16 px-8 py-4 hover:bg-gray-50">
            <Link to="/" className="paragraph text-sm text-gray-500"><span className="paragraph text-sm text-primary">샛별·낮</span>배송안내</Link>
          </li>
        </ul>
    </header>
  )
}

export default Header;