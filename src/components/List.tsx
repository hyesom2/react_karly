interface ListProps {
  type: string;
}

function List({ type }: ListProps) {
  switch (type) {
    case "header":
      return (
        <ul className="flex justify-end items-center h-36 w-1050 mx-auto">
          <li className="flex items-center text-primary after:content-[''] after:inline-block after:w-1 after:h-13 after:bg-gray-300 after:mx-12 transition-all duration-300 ease-in-out">
            <a href="/" className="paragraph text-sm hover:font-bold focus:font-bold active:font-bold">회원가입</a>
          </li>
          <li className="flex items-center text-content after:content-[''] after:inline-block after:w-1 after:h-13 after:bg-gray-300 after:mx-12 transition-all duration-300 ease-in-out">
            <a href="/" className="paragraph text-sm hover:font-bold focus:font-bold active:font-bold">로그인</a>
          </li>
          <li className="text-content">
            <a href="/" className="paragraph text-sm hover:font-bold focus:font-bold active:font-bold transition-all duration-300 ease-in-out">고객센터</a>
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
  }
}

export default List;