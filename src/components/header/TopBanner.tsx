function TopBanner() {
  return (
    <div className="bg-primary w-full h-42">
      <div className="relative flex justify-center items-center w-1050 mx-auto h-full">
        <a href="/" className="text-white text-sm">지금 가입하고, 인기상품 <strong className="text-white text-sm">100원</strong>에 받아가세요!</a>
        <button type="button" className="absolute right-0 w-42 h-42">
          <span className="icon icon-cancel text-xxl text-gray-300"></span>
        </button>
      </div>
    </div>
  )
}

export default TopBanner;