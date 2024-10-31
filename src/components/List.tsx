import { Link } from 'react-router-dom';
import Divide from '@/components/Divide';

interface ListProps {
  type: string;
}

function List({ type }: ListProps) {
  switch (type) {
    case "header":
      return (
        <ul className="flex justify-end items-center h-36 w-1050 mx-auto">
          <li className="flex items-center text-primary transition-all duration-300 ease-in-out">
            <Link to="/register" className="paragraph text-sm hover:font-bold focus:font-bold active:font-bold">회원가입</Link>
          </li>
          <Divide height={13} bgColor="bg-gray-300" mx={12} />
          <li className="flex items-center text-primary transition-all duration-300 ease-in-out">
            <Link to="/login" className="paragraph text-sm hover:font-bold focus:font-bold active:font-bold">로그인</Link>
          </li>
          <Divide height={13} bgColor="bg-gray-300" mx={12} />
          <li className="text-content">
            <Link to="/service" className="paragraph text-sm hover:font-bold focus:font-bold active:font-bold transition-all duration-300 ease-in-out">고객센터</Link>
            <span className="icon icon-triangle_bottom text-sm text-black ml-4 cursor-pointer"></span>
          </li>
        </ul>
      )
    case "products":
      return (
        <ul className="flex justify-end items-center h-24">
          <li className="flex items-center label text-md text-content after:content-[''] after:inline-block after:w-1 after:h-10 after:bg-gray-300 after:mx-8 cursor-pointer focus:text-content active:text-content hover:text-content transition-all duration-300 ease-in-out">추천순<span className="icon icon-help text-lg text-gray-200"></span></li>
          <li className="flex items-center label text-md text-gray-300 after:content-[''] after:inline-block after:w-1 after:h-10 after:bg-gray-300 after:mx-8 cursor-pointer focus:text-content active:text-content hover:text-content transition-all duration-300 ease-in-out">신상품순</li>
          <li className="flex items-center label text-md text-gray-300 after:content-[''] after:inline-block after:w-1 after:h-10 after:bg-gray-300 after:mx-8 cursor-pointer focus:text-content active:text-content hover:text-content transition-all duration-300 ease-in-out">판매량순</li>
          <li className="flex items-center label text-md text-gray-300 after:content-[''] after:inline-block after:w-1 after:h-10 after:bg-gray-300 after:mx-8 cursor-pointer focus:text-content active:text-content hover:text-content transition-all duration-300 ease-in-out">혜택순</li>
          <li className="flex items-center label text-md text-gray-300 after:content-[''] after:inline-block after:w-1 after:h-10 after:bg-gray-300 after:mx-8 cursor-pointer focus:text-content active:text-content hover:text-content transition-all duration-300 ease-in-out">낮은 가격순</li>
          <li className="label text-md text-gray-300 cursor-pointer focus:text-content active:text-content hover:text-content transition-all duration-300 ease-in-out">높은 가격순</li>
        </ul>
      )
    case "find": {
      return (
        <ul className="flex justify-end items-center w-full">
          <li><Link to="/" className="paragraph text-sm text-content">아이디 찾기</Link></li>
          <Divide height={10} bgColor="bg-content" mx={4}></Divide>
          <li><Link to="/" className="paragraph text-sm text-content">비밀번호 찾기</Link> 찾기</li>
        </ul>
      )
    }
    case "product": {
      return (
        <ul className="flex justify-end items-center w-full">
          <li className="label text-md text-content">
            <button type="button" className="hover:text-primary focus:text-primary active:text-content">추천순</button>
          </li>
          <Divide height={10} bgColor="bg-gray-300" mx={8}></Divide>
          <li className="label text-md text-gray-300">
            <button type="button" className="hover:text-primary focus:text-primary active:text-content">최근 등록순</button>
          </li>
        </ul>
      )
    }
  }
}

export default List;