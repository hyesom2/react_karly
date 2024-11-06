import bannerStore from "@/stores/components/Header/bannerStore";

function TopBanner() {
  const { show, setShow } = bannerStore();

  return (
    <div className={`bg-primary w-full ${show ? 'h-42': 'h-0'} transition-height duration-300 overflow-hidden`}>
      <div className="relative flex justify-center items-center w-1050 mx-auto h-full">
        <a href="/" className="text-white text-sm">
          지금 가입하고, 인기상품 <strong className="text-white text-sm">100원</strong>에 받아가세요!
        </a>
        <button type="button" className="absolute right-0 w-42 h-42 focus:border border-solid border-white" onClick={setShow}>
          <span className="icon icon-cancel text-xxl text-gray-300 hover:font-bold focus:font-bold active:font-bold"></span>
        </button>
      </div>
    </div>
  );
}

export default TopBanner;
